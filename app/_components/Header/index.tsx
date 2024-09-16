import { Menu } from "@/app/_components/Menu";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header
			className="
      z-50 absolute pt-4 px-6 pb-2
      flex items-center justify-between w-full
      sm:pt-6 sm:px-4"
		>
			<Link href="/" className="flex">
				<Image
					src="/logo.svg"
					alt="SIMPLE"
					className="h-6 w-auto"
					width={348}
					height={133}
					priority={true}
				/>
			</Link>
			<Menu />
		</header>
	);
}
