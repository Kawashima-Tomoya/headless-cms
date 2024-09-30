import type React from "react";

type Props = {
	children: React.ReactNode;
};

export function SheetLayout({ children }: Props) {
	return (
		<div
			className="
      relative bg-white w-[840px] rounded-lg *
      mt-[-40px] mx-auto mb-0 p-20 lg:w-[calc(100%-160px)]
			sm:w-[calc(100%-32px)] sm:px-[24px] sm:py-[16px]"
		>
			{children}
		</div>
	);
}
