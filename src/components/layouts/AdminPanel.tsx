'use client';
import Header from './Header';
import Sidebar from './Sidebar';
import NotConnected from '../global/NotConnected';
import useAuth from '@/hooks/useAuth';

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
	const { isLogin } = useAuth();
	const localSession = JSON.parse(localStorage.getItem('session-user')!);
	return (
		<main className='h-screen'>
			<Sidebar />
			<main className='flex flex-col h-full'>
				<Header />
				<div className='w-full pt-5 px-4 sm:px-6 md:px-8 lg:pl-72 bg-[#f3f4f6] dark:bg-gray-700 dark:text-[#f3f4f6] flex-grow'>
					{!isLogin && !localSession ? <NotConnected /> : children}
				</div>
			</main>
		</main>
	);
};

export default AdminPanel;
