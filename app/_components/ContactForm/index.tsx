export function ContactForm() {
	return (
		<form className="max-w-[600px] mx-auto my-0">
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

// .success {
//   @apply bg-gray-100 text-center p-10 rounded;
// }
// .error {
//   @apply text-red-500 text-sm mb-2;
// }

// @media (max-width: 640px) {
//   .success {
//     @apply text-left;
//   }
// }
