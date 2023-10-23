import { Metadata } from 'next';
import MainAppLayout from '@/components/layouts/MainAppLayout';

export const metadata: Metadata = {
	title: 'EDUSYS - ISDR/GL',
	description: 'Recouvrement',
	applicationName: 'EDUSYS',
	keywords: ['EDUSYS', 'ISDR/GL', 'LMD', 'RECOUVREMENT'],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <MainAppLayout>{children}</MainAppLayout>;
}
