import { formatDate } from "@/app/_libs/utils";
import Image from "next/image";

type Props = {
	date: string;
};

export function UpdateDate({ date }: Props) {
	return (
		<span
			className="
      flex items-center gap-2 mx-0 my-[0.8rem] text-[1rem]"
		>
			<Image
				src="/clock.svg"
				alt="clock"
				width={16}
				height={16}
				loading="eager"
			/>
			{formatDate(date)}
		</span>
	);
}
