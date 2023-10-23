import { FunctionComponent, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../global/PageLoader';

const AdminPanel = dynamic(() => import('./AdminPanel'), {
	ssr: false,
	loading: () => <PageLoader />,
});

const MainAppLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <AdminPanel>{children}</AdminPanel>;
};

export default MainAppLayout;
