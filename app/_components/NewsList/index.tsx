import { CategoryTag } from "@/app/_components/Category";
import { UpdateDate } from "@/app/_components/UpdateDate";
import type { News } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";

type Props = {
	news: News[];
};

export function NewsList({ news }: Props) {
	if (news.length === 0) {
		return <p>記事がありません</p>;
	}
	return (
		<ul>
			{news.map((article) => (
				<li
					key={article.id}
					className="border-b border-b-[--color-border-light] last:border-b-0"
				>
					<Link
						href={`/news/${article.id}`}
						className="
						flex items-start gap-10 px-0 py-[24px]
						sm:block sm:px-0 sm:py-[16px]"
					>
						<Image
							className="w-[200px] h-auto rounded-[--border-radius] sm:hidden"
							src="/no-image.png"
							alt="No image"
							width={1200}
							height={630}
						/>
						<dl className="">
							<dt className="text-[1.1rem] font-bold mb-[0.5rem] sm:text-[1rem] sm:mb-[0.4rem]">
								{article.title}
							</dt>
							<dd className="flex items-center gap-4">
								<CategoryTag category={article.category} />
								<UpdateDate date={article.publishedAt ?? article.createdAt} />
							</dd>
						</dl>
					</Link>
				</li>
			))}
		</ul>
	);
}
