import Link from "next/link";

export function Footer() {
	return (
		<footer
			className="
      px-6 py-4 mt-20 
      text-center text-[--color-text-sub] text-[0.8rem]"
		>
			<nav className="mb-4">
				<ul
					className="
          flex justify-center gap-10 text-[1rem] whitespace-nowrap
          sm:flex-wrap sm:gap-y-2 sm:gap-x-0
        "
				>
					<Link href="/news" className="sm:w-1/2">
						ニュース
					</Link>
					<Link href="/members" className="sm:w-1/2">
						メンバー
					</Link>
					<Link href="/contact" className="sm:w-1/2">
						お問い合わせ
					</Link>
				</ul>
			</nav>
			<small>&copy; SIMPLE. All Rights Reserved 2024</small>
		</footer>
	);
}
