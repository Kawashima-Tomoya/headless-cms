"use client";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Menu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<div>
			<nav
				className={
					isOpen
						? "sm:block sm:fixed sm:top-0 sm:right-0 sm:bottom-0 sm:left-0 sm:bg-[--color-bg-painted] sm:text-[--color-text-unpainted] sm:px-4 sm:py-6"
						: "sm:hidden"
				}
			>
				<ul className="flex text-white gap-10 sm:flex-col sm:gap-6">
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
				<button
					className={cx(
						"hidden sm:flex sm:bg-none sm:border-none sm:cursor-pointer, sm:absolute sm:top-6 sm:right-4",
					)}
					type="button"
					onClick={close}
				>
					<Image
						src="/close.svg"
						alt="close"
						width={24}
						height={24}
						priority={true}
					/>
				</button>
			</nav>
			<button
				className="hidden sm:flex sm:bg-none sm:border-none sm:cursor-pointer"
				type="button"
				onClick={open}
			>
				<Image
					src="/menu.svg"
					alt="menu"
					width={24}
					height={24}
					priority={true}
				/>
			</button>
		</div>
	);
}
