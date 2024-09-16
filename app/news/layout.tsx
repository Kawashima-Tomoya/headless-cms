import { Hero } from "@/app/_components/Hero";
import { SheetLayout } from "@/app/_layouts/Sheet";
import type React from "react";

type Props = {
	children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
	return (
		<>
			<Hero title="News" sub="ニュース" />
			<SheetLayout>{children}</SheetLayout>
		</>
	);
}
