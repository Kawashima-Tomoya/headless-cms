import { getAllCategoryList, getAllNewsList } from "@/app/_libs/microcms";
import type { MetadataRoute } from "next";

const buildUrl = (path?: string) => `http://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();
	const newsContents = await getAllNewsList();
	const categoryContents = await getAllCategoryList();

	const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
		url: buildUrl(`/news/${content.id}`),
		lastModified: content.revisedAt,
	}));
	const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
		(content) => ({
			url: buildUrl(`/news/category/${content.id}`),
			lastModified: content.revisedAt,
		}),
	);

	return [
		{
			url: buildUrl(),
			lastModified: now,
		},
		{
			url: buildUrl("/members"),
			lastModified: now,
		},
		{
			url: buildUrl("/news"),
			lastModified: now,
		},
		{
			url: buildUrl("/contact"),
			lastModified: now,
		},
		...newsUrls,
		...categoryUrls,
	];
}
