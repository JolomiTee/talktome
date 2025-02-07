import {
	BotIcon,
	Copy,
	MessagesSquare,
	PanelsTopLeft,
	PenSquare,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
	const features = [
		{
			title: "Enhanced Accuracy",
			description:
				"Leverage vast knowledge bases for more precise and reliable responses.",
			icon: "🎯",
		},
		{
			title: "Context-Aware",
			description:
				"Understand and maintain context throughout the conversation for more natural interactions.",
			icon: "🧠",
		},
		{
			title: "Customizable Knowledge",
			description:
				"Easily integrate your own data sources to tailor the chat experience to your needs.",
			icon: "🛠️",
		},
	];

	const steps = [
		{
			title: "Copy URL",
			description:
				"Copy the url of the webpage you want to interact with from the address bar",
			icon: <Copy />,
		},
		{
			title: "Append to the RAG Talk URL",
			description: `Paste the URL with a preceeding '/' after the RAG Talk url eg: \n 'ragtalk.vercel.com/https://my-url.com'\n and then hit enter`,
			icon: <PenSquare />,
		},
		{
			title: "Start Chatting",
			description: `You can now access the chat interface and talk to the chatbot for context specific answers`,
			icon: <MessagesSquare />,
		},
	];
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-white shadow-sm">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
					<div className="flex items-center">
						<BotIcon className="size-10" />
						<span className="ml-2 text-xl font-bold text-gray-900">
							RAG Talk
						</span>
					</div>
				</nav>
			</header>

			<main className="flex-grow">
				<section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
						<h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
							Supercharge Your Conversations with RAG Chat
						</h1>
						<p className="mt-6 text-xl max-w-3xl mx-auto">
							Experience the power of Retrieval-Augmented Generation for
							more accurate, context-aware, and informative chat
							interactions.
						</p>
						<div className="mt-10">
							<button
								type="button"
								title="Paste a url after 'ragtalk.vercel.app/'"
								className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition duration-300"
							>
								Get Started
							</button>
						</div>
					</div>
				</section>

				<section id="features" className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
							Why Choose RAG Chat?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<div
									key={index}
									className="bg-white p-6 rounded-lg shadow-md"
								>
									<div className="text-4xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="how-to-use" className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
							How To Use
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{steps.map((feature, index) => (
								<div
									key={index}
									className="bg-white p-6 rounded-lg shadow-md"
								>
									<div className="text-4xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-800 text-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center gap-2 mb-4 md:mb-0">
							<BotIcon className="size-10" />
							<span className="ml-2 text-xl font-bold">RAG Chat</span>
						</div>
					</div>
					<div className="mt-8 text-center text-gray-400 text-sm">
						© {new Date().getFullYear()} RAG Chat. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
