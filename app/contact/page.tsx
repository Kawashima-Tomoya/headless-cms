import { ContactForm } from "@/app/_components/ContactForm";

export default function Page() {
	return (
		<div>
			<p className="text-center mb-10 md:text-left">
				ご質問、ご相談は下記フォームよりお問い合わせください。
				<br />
				内容確認後、担当者より通常3営業日以内にご連絡いたします。
			</p>
			<ContactForm />
		</div>
	);
}
