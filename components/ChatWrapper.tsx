"use client";

import { useChat } from "ai/react";
import Messages from "./Messages";

const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
	const { messages, handleInputChange, input, handleSubmit } = useChat({
		api: "/api/chat-stream",
		body: { sessionId },
	});
	return (
		<div className="relative h-full bg-zinc-900 flex divide-y divide-zinc-500 flex-col justify-between gap-2">
			<div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
				<Messages messages={messages} />
			</div>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="input"
					id="input"
					onChange={handleInputChange}
					value={input}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default ChatWrapper;
