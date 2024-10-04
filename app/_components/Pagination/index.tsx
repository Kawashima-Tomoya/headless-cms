import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";

type Props = {
	totalCount: number;
	current?: number;
	basePath?: string;
};

export function Pagination({
	totalCount,
	current = 1,
	basePath = "/news",
}: Props) {
	const pages = Array.from(
		{ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
		(_, index) => index + 1,
	);

	return (
		<nav>
			<ul className="flex justify-center items-center p-6 mt-6">
				{pages.map((page) => (
					<li key={page} className="mx-1">
						{current === page ? (
							<span
								className="
                flex justify-center items-center w-9 h-9 rounded-[var(--border-radius)]
                text-[var(--color-text-unpainted)] bg-[var(--color-button-primary)]"
							>
								{page}
							</span>
						) : (
							<Link
								href={`/${basePath}/p/${page}`}
								className="flex justify-center items-center w-9 h-9 
                rounded-[var(--border-radius)] bg-slate-200"
							>
								{page}
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
