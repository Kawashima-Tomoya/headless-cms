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
			<nav>
				<ul className="flex text-white gap-10">
					<li>
						<Link href="/news">ニュース</Link>
					</li>
					<li>
						<Link href="/members">メンバー</Link>
					</li>
					<li>
						<Link href="/contact">お問い合わせ</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
