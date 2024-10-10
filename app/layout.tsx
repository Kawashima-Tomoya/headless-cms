import { Header } from "@/app/_components/Header";
import "./globals.css";
import { Footer } from "@/app/_components/Footer";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
	metadataBase: new URL("https://headless-cms-lac"),
	title: {
		template: "%s | シンプルなコーポレートサイト",
		default: "シンプルなコーポレートサイト",
	},
	description: "microcms practice",
	openGraph: {
		title: "シンプルなコーポレートサイト",
		description: "microcms practice",
		images: ["/ogp.png"],
	},
	alternates: {
		canonical: "https://headless-cms-lac",
	},
	viewport: "width=device-width, initial-scale=1.0",
};

export const revalidate = 60;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
