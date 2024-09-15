import { ButtonLink } from "@/app/_components/ButtonLink";
import { NewsList } from "@/app/_components/NewsList";
import type { News } from "@/app/_libs/microcms";
import Image from "next/image";

const data: {
	contents: News[];
} = {
	contents: [
		{
			id: "1",
			title: "渋谷にオフィスを移転しました",
			category: {
				name: "更新情報",
			},
			publishedAt: "2023/05/19",
			createdAt: "2023/05/19",
		},
		{
			id: "2",
			title: "当社CEOが業界リーダーTOP30に選出されました",
			category: {
				name: "更新情報",
			},
			publishedAt: "2023/05/19",
			createdAt: "2023/05/19",
		},
		{
			id: "3",
			title: "テストの記事です",
			category: {
				name: "更新情報",
			},
			publishedAt: "2023/04/19",
			createdAt: "2023/04/19",
		},
	],
};

export default function Home() {
	const sliceData = data.contents.slice(0, 2);

	return (
		<>
			<section
				className="
					relative flex items-center justify-center
					px-0 py-[200px] sm:px-[16px] sm:py-[120px]
					bg-black/50 text-white overflow-hidden"
			>
				<div className=" ">
					<h1
						className="
						text-[2.5rem] font-bold text-center mb-4
						sm:text-[2rem] sm:text-left"
					>
						テクノロジーの力で世界を変える
					</h1>
					<p
						className="
						text-center sm:text-left sm:text-[0.9rem]"
					>
						私たちは市場をリードしているグローバルテックカンパニーです。
					</p>
				</div>
				<Image
					className="
						-z-10 absolute top-0 right-0 flex items-center justify-center 
						w-full h-[600px] object-cover object-right sm:w-auto"
					src="/img-mv.jpg"
					alt="main visual"
					width={4000}
					height={1200}
				/>
			</section>

			<section
				className="
				relative bg-white w-[840px] mt-[-40px] mx-auto mb-0
				px-[40px] py-[20px] rounded-[--border-radius] lg:w-[calc(100%-160px)]
				sm:w-[calc(100%-32px)] sm:px-[24px] sm:py-[16px]"
			>
				<h2 className="text-[1.5rem]">News</h2>
				<NewsList news={sliceData} />
				<div
					className="
					absolute right-[-40px] bottom-[-40px] 
					sm:relative sm:right-auto sm:bottom-auto sm:mt-[16px]"
				>
					<ButtonLink href="/news">もっとみる</ButtonLink>
				</div>
			</section>
		</>
	);
}
