import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RAG Talk",
	description:
		"RAG Talk is a Retrieval-Augmented Generation (RAG) chat interface that can take in data from a webpage provided, and make sense out of it to provide more context specific answers to a question. Experience the power of Retrieval-Augmented Generation for more accurate, context-aware, and informative chat interactions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
			>
				<Providers>
					<main className="h-screen ark text-foreground bg-background">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
