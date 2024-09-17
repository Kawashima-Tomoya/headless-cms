import { CategoryTag } from "@/app/_components/CategoryTag";
import { UpdateDate } from "@/app/_components/UpdateDate";
import type { News } from "@/app/_libs/microcms";
import domPurify from "isomorphic-dompurify";
import Image from "next/image";

type Props = {
	data: News;
};

export function Article({ data }: Props) {
	const sanitizedContent = domPurify.sanitize(data.content);

	return (
		<main>
			<h1>{data.title}</h1>
			<p>{data.description}</p>
			<div>
				<CategoryTag category={data.category} />
				<UpdateDate date={data.publishedAt ?? data.createdAt} />
			</div>
			{data.thumbnail && (
				<Image
					src={data.thumbnail.url}
					alt={data.title}
					width={data.thumbnail.width}
					height={data.thumbnail.height}
				/>
			)}
			<div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
		</main>
	);
}
