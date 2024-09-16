import type React from "react";

type Props = {
	children: React.ReactNode;
};

export function SheetLayout({ children }: Props) {
	return (
		<div
			className="
      relative bg-white w-[840px] rounded-lg *
      mt-[-40px] mx-auto mb-0 p-20"
		>
			{children}
		</div>
	);
}
