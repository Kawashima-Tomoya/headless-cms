import { Article } from "@/app/_components/Article";
import { ButtonLink } from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
	params: {
		slug: string;
	};
};

export default async function Page(props: Props) {
	const newsDetail = await getNewsDetail(props.params.slug).catch(notFound);
	return (
		<div>
			<Article data={newsDetail} />
			<div className="flex justify-end border-t border-neutral-300 mt-20 pt-10">
				<ButtonLink href="/news">ニュース一覧へ</ButtonLink>
			</div>
		</div>
	);
}
