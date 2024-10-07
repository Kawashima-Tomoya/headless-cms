import { Hero } from "@/app/_components/Hero";
import { SheetLayout } from "@/app/_layouts/Sheet";
import type React from "react";

type Props = {
	children: React.ReactNode;
};

export default function ContactLayout({ children }: Props) {
	return (
		<>
			<Hero title="Contact" sub="お問い合わせ" />
			<SheetLayout>{children}</SheetLayout>
		</>
	);
}
