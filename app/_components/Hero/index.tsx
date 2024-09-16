import Image from "next/image";

type Props = {
	title: string;
	sub: string;
};

export function Hero({ title, sub }: Props) {
	return (
		<section
			className="
					relative flex items-center justify-center
					px-0 py-[100px] sm:px-[16px] sm:py-[120px]
					bg-black/50 text-white overflow-hidden"
		>
			<div className=" ">
				<h1
					className="
						text-[2.5rem] font-bold text-center mb-4
						sm:text-[2rem] sm:text-left"
				>
					{title}
				</h1>
				<p
					className="flex items-center gap-5 mb-10 justify-center
          sm:text-left sm:text-[0.9rem]
          before:block before:h-[1px] before:w-5 before:bg-[var(--color-text-unpainted)]
          after:block after:h-[1px] after:w-5 after:bg-[var(--color-text-unpainted)]"
				>
					{sub}
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
	);
}
