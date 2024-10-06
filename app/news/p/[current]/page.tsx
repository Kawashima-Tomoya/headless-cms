import { NewsList } from "@/app/_components/NewsList";
import { Pagination } from "@/app/_components/Pagination";
import { SearchField } from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
	params: {
		current: string;
	};
};

export default async function Page({ params }: Props) {
	const current = Number.parseInt(params.current, 10);
	if (Number.isNaN(current) || current < 1) {
		notFound();
	}

	const { contents: news, totalCount } = await getNewsList({
		limit: NEWS_LIST_LIMIT,
		offset: NEWS_LIST_LIMIT * (current - 1),
	});

	if (news.length === 0) {
		notFound();
	}

	return (
		<>
			<SearchField />
			<NewsList news={news} />{" "}
			<Pagination totalCount={totalCount} current={current} />
		</>
	);
}
