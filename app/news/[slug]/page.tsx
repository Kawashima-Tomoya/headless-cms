import { Article } from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
	params: {
		slug: string;
	};
};

export default async function Page(props: Props) {
	const newsDetail = await getNewsDetail(props.params.slug).catch(notFound);
	return <Article data={newsDetail} />;
}
