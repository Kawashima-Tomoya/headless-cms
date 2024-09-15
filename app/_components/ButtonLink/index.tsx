import type React from "react";

type Props = {
	href: string;
	children: React.ReactNode;
};

export function ButtonLink({ href, children }: Props) {
	return (
		<a
			href={href}
			className="
        block px-[40px] py-[20px] rounded-[--border-radius] w-[300px] 
        bg-[url('/arrow-right.svg')] bg-no-repeat
        bg-[right_20px_center] bg-[--color-button-primary]
        text-[--color-text-unpainted] hover:opacity-90
        sm:px-[24px] sm:py-[16px] sm:w-full"
		>
			{children}
		</a>
	);
}
