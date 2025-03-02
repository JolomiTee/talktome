import ChatWrapper from "@/components/ChatWrapper";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
import { ragChat } from "../../lib/rag-chat";

interface PageProps {
	params: Promise<{ url: string | string[] }>;
}

const Page = async ({ params }: PageProps) => {
	const resolvedParam = await params;
	const sessionCookie = (await cookies()).get("sessionId")?.value;

	const reconstructUrl = ({ url }: { url: string[] }) => {
		const decodedComponents = url.map((component) =>
			decodeURIComponent(component)
		);

		return decodedComponents.join("/");
	};
	const reconstructedUrl = reconstructUrl({
		url: resolvedParam.url as string[],
	});

	const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(
		/\//g,
		""
	);

	const isAlreadyIndexed = await redis.sismember(
		"indexed-urls",
		reconstructedUrl
	);

	const initialMessages = await ragChat.history.getMessages({
		amount: 10,
		sessionId,
	});

	if (!isAlreadyIndexed) {
		await ragChat.context.add({
			type: "html",
			source: reconstructedUrl,
			config: {
				chunkOverlap: 50,
				chunkSize: 200,
			},
		});
	}

	await redis.sadd("indexed-urls", reconstructedUrl);

	return (
		<ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
	);
};

export default Page;
