import MainAppLayout from '@/components/layouts/MainAppLayout';

export const metadata = {
	title: `${process.env.NEXT_PUBLIC_COMPANY_NAME}-App`,
	description: 'Gestion et suivi des stocks',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <MainAppLayout>{children}</MainAppLayout>;
}
