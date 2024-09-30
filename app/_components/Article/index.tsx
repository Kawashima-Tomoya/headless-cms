import { CategoryTag } from "@/app/_components/CategoryTag";
import { UpdateDate } from "@/app/_components/UpdateDate";
import type { News } from "@/app/_libs/microcms";
import domPurify from "isomorphic-dompurify";
import Image from "next/image";
import c from "./index.module.css";

type Props = {
	data: News;
};

export function Article({ data }: Props) {
	const sanitizedContent = domPurify.sanitize(data.content);

	return (
		<main>
			<h1 className="text-[2.4rem] font-bold mb-6 text-left sm:text-[1.5rem] sm:mb-5 sm:text-wrap">
				{data.title}
			</h1>
			<p className="text-[0.9rem] text-[--color-text-sub] my-6 text-left sm:mb-10">
				{data.description}
			</p>
			<div
				className="flex justify-start items-center flex-shrink gap-6 mb-16
				sm:mb-10 text-sm "
			>
				<CategoryTag category={data.category} />
				<UpdateDate date={data.publishedAt ?? data.createdAt} />
			</div>
			{data.thumbnail && (
				<Image
					src={data.thumbnail.url}
					alt={data.title}
					width={data.thumbnail.width}
					height={data.thumbnail.height}
					className="w-full h-auto mb-16"
				/>
			)}
			<div
				dangerouslySetInnerHTML={{ __html: sanitizedContent }}
				className={c.content}
			/>
		</main>
	);
}
