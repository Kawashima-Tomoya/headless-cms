export default function NotFound() {
	return (
		<div
			className="
      relative bg-white w-[840px] rounded-[--border-radius]
      px-[80px] py-[160px] mt-[-40px] mx-auto mb-0
      sm:w-[calc(100%-32px)] sm:mt-[40px] sm:px-4 sm:py-10"
		>
			<dl>
				<dt className="text-[2rem] text-center font-bold mb-6 sm:text-left">
					ページが見つかりませんでした
				</dt>
				<dd className="text-[1rem] text-center sm:text-left">
					あなたがアクセスしようとしたページは存在しません。
					<br />
					URLを再度ご確認ください。
				</dd>
			</dl>
		</div>
	);
}
