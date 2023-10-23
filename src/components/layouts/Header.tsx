import Navbar from './Navbar';

const Header = () => {
	return (
		<>
			<header className='sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700'>
				<Navbar />
			</header>
		</>
	);
};

export default Header;
