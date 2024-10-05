"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import type React from "react";

export function SearchField() {
	const router = useRouter();
	const SearchParams = useSearchParams();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const q = e.currentTarget.elements.namedItem("q");
		if (q instanceof HTMLInputElement) {
			const params = new URLSearchParams();
			params.set("q", q.value.trim());
			router.push(`news/search?${params.toString()}`);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="mb-6">
			<label
				className="
          flex items-center gap-3 py-3 px-4 border border-gray-300 rounded 
          w-full max-w-full focus-within:border-gray-400"
			>
				<Image
					src="/search.svg"
					alt="検索"
					width={16}
					height={16}
					loading="eager"
				/>
				<input
					type="text"
					name="q"
					defaultValue={SearchParams.get("q") ?? undefined}
					placeholder="キーワードを入力"
					className="
            block box-border p-0 w-full appearance-none tap-highlight-transparent
            outline-none bg-transparent border border-transparent"
				/>
			</label>
		</form>
	);
}
