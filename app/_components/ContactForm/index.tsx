"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";

const initialState = {
	status: "",
	message: "",
};

export function ContactForm() {
	const [state, formAction] = useFormState(createContactData, initialState);
	console.log(state);
	if (state.status === "success") {
		return (
			<p className="bg-[var(--color-bg-sub)] text-center p-10 rounded-[var(--border-radius)] md:text-left">
				お問い合わせいただきありがとうございます。
				<br />
				お返事まで今しばらくお待ちください。
			</p>
		);
	}
	return (
		<form action={formAction} className="max-w-[600px] mx-auto my-0">
			<div className="flex justify-start items-center w-full gap-6">
				<div className="flex flex-col flex-1 py-2 px-0;">
					<label htmlFor="lastName" className="text-[14px]">
						姓
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						className="
              border border-[var(--color-border)] p-2 rounded leading-[1.5] w-full;"
					/>
				</div>
				<div className="flex flex-col flex-1 py-2 px-0;">
					<label htmlFor="firstName" className="text-[14px]">
						名
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						className="
              border border-[var(--color-border)] p-2 
              rounded leading-[1.5] w-full;"
					/>
				</div>
			</div>
			<div className="flex flex-col flex-1 py-2 px-0;">
				<label htmlFor="company" className="text-[14px]">
					会社名
				</label>
				<input
					type="text"
					id="company"
					name="company"
					className="
          border border-[var(--color-border)] p-2
          rounded leading-[1.5] w-full;"
				/>
			</div>
			<div className="flex flex-col flex-1 py-2 px-0;">
				<label htmlFor="email" className="text-[14px]">
					メールアドレス
				</label>
				<input
					type="text"
					id="email"
					name="email"
					className="
          border border-[var(--color-border)] p-2
          rounded leading-[1.5] w-full;"
				/>
			</div>
			<div className="flex flex-col flex-1 py-2 px-0;">
				<label htmlFor="message" className="text-[14px]">
					メッセージ
				</label>
				<textarea
					id="message"
					name="message"
					className="
          border border-[var(--color-border)] p-2
          rounded leading-[1.5] w-full; h-24"
				/>
			</div>
			<div className="text-center mt-10">
				{state.status === "error" && (
					<p className="text-[var(--color-text-error)] text-[14px] mb-2">
						{state.message}
					</p>
				)}
				<input
					type="submit"
					value="送信する"
					className="
          border-none bg-[var(--color-button-primary)] py-4 px-10 text-[16px]
          rounded text-[var(--color-text-unpainted)] cursor-pointer"
				/>
			</div>
		</form>
	);
}
