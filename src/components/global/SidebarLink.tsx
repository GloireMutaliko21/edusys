import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
type SidebarLinkProps = PropsWithChildren<{
	link?: string;
	label: string;
	className?: string;
}>;
export const SidebarLink: FC<SidebarLinkProps> = ({
	link = '#',
	label,
	children,
	className,
	...props
}) => {
	return (
		<li>
			<Link
				className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white ${className}`}
				{...props}
				href={link}
			>
				{children}
				{label}
			</Link>
		</li>
	);
};
