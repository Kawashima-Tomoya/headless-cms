import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import { getMembersList } from "@/app/_libs/microcms";
import Image from "next/image";

export default async function Page() {
	const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });

	return (
		<div className="">
			{data.contents.length === 0 ? (
				<p className="mb-10">メンバーが登録されていません。</p>
			) : (
				<ul>
					{data.contents.map((member) => (
						<li
							key={member.id}
							className="
              flex items-start gap-10 mb-20 even:flex-row-reverse"
						>
							<Image
								className="w-[240px] h-auto rounded-[--border-radius)]"
								src={member.image.url}
								alt={member.name}
								width={member.image.width}
								height={member.image.height}
							/>
							<dl>
								<dd className="text-[1.2rem] font-bold">{member.name}</dd>
								<dd className="mb-2">{member.position}</dd>
								<dd className="text-[0.9rem]">{member.profile}</dd>
							</dl>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
