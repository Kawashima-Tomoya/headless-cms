import type { Category } from "@/app/_libs/microcms";

type Props = {
	category: Category;
};

export function CategoryTag({ category }: Props) {
	return (
		<span
			className="
      bg-[--color-bg-sub] py-1 px-3 
      rounded-[--border-radius]
      whitespace-nowrap text-[1rem]"
		>
			{category.name}
		</span>
	);
}
