import { CategoryTag } from "@/app/_components/CategoryTag";
import { NewsList } from "@/app/_components/NewsList";
import { Pagination } from "@/app/_components/Pagination";
import { SearchField } from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Props) {
	const category = await getCategoryDetail(params.id).catch(notFound);

	const { contents: news, totalCount } = await getNewsList({
		limit: NEWS_LIST_LIMIT,
		filters: `category[equals]${category.id}`,
	});

	return (
		<div>
			<SearchField />
			<p>
				<CategoryTag category={category} />
				の一覧
			</p>
			<NewsList news={news} />
			<Pagination
				totalCount={totalCount}
				basePath={`/news/category/${params.id}`}
			/>
		</div>
	);
}
