import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
type SidebarAccordeonChildProps = PropsWithChildren<{
    link:string
    label:string
}>
export const SidebarSubLInk:FC<SidebarAccordeonChildProps> = ({link="#",label}) => {
  return (
    <li>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
            href={link}
          >
            {label}
          </Link>
        </li>
  )
}
