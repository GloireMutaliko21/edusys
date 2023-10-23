const PageHeader = ({
	title,
	actionButton,
}: {
	title: string;
	actionButton?: React.ReactNode;
}) => {
	return (
		<div className='mb-5 flex flex-col sm:flex-row justify-between items-center gap-3'>
			<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
				{title}
			</p>
			{actionButton && (
				<div className='bg-primary-700 hover:bg-primary-600 hover:shadow-lg duration-300 p-3 py-2 text-sm text-white rounded-md flex gap-2 justify-center items-center'>
					{actionButton}
				</div>
			)}
		</div>
	);
};

export default PageHeader;
