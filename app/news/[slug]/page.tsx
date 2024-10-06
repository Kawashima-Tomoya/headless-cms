import { Article } from "@/app/_components/Article";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
	params: {
		slug: string;
	};
	searchParams: {
		dk?: string;
	};
};

export const revalidate = 30;

export default async function Page({ params, searchParams }: Props) {
	const newsDetail = await getNewsDetail(params.slug, {
		draftKey: searchParams.dk,
	}).catch(notFound);
	return (
		<div>
			<Article data={newsDetail} />
			<div className="flex justify-end border-t border-neutral-300 mt-20 pt-10">
				<ButtonLink href="/news">ニュース一覧へ</ButtonLink>
			</div>
		</div>
	);
}
