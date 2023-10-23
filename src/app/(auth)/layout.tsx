export const metadata = {
	title: 'EDUSYS - ISDR/GL',
	description: 'Recouvrement frais académiques',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='h-screen dark:bg-slate-900 bg-gray-100 flex w-full items-center py-16'>
			<main className='w-full max-w-md mx-auto p-6'>
				<div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
					{children}
				</div>
			</main>
		</div>
	);
}
