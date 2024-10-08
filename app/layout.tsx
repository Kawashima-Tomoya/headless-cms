import { Header } from "@/app/_components/Header";
import "./globals.css";
import { Footer } from "@/app/_components/Footer";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
	title: "microcms",
	description: "microcms practice",
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
			<script
				type="text/javascript"
				id="hs-script-loader"
				async={true}
				defer={true}
				src="//js.hs-scripts.com/47643187.js"
			/>
		</html>
	);
}
