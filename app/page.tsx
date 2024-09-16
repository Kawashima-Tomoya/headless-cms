import { ButtonLink } from "@/app/_components/ButtonLink";
import { NewsList } from "@/app/_components/NewsList";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import Image from "next/image";

export default async function Home() {
	const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

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
				<NewsList news={data.contents} />
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
