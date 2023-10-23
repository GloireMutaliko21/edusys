import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

const Sidebar = () => {
	const { logout } = useAuth();
	return (
		<>
			{/* Sidebar */}
			<aside
				id='application-sidebar'
				className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700'
			>
				<div className='px-6'>
					<Link
						className='flex-none text-xl font-semibold dark:text-white'
						href='/'
						aria-label='Brand'
					>
						EDUSYS - ISDR/GL
					</Link>
				</div>
				<nav
					className='hs-accordion-group p-6 w-full flex flex-col flex-wrap'
					data-hs-accordion-always-open=''
				>
					<ul className='space-y-1.5 mb-20'>
						<button
							onClick={logout}
							className={`flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-red-500 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white w-full`}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='1em'
								height='1em'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Zm12.175-8H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7q.275-.3.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.713.288t-.712-.313q-.275-.3-.263-.713t.288-.687l1.85-1.85Z'
								></path>
							</svg>
							Déconnexion
						</button>
					</ul>
				</nav>
			</aside>
			{/* End Sidebar */}
		</>
	);
};

export default Sidebar;
