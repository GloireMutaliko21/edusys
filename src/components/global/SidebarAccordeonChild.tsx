import { FC, PropsWithChildren } from 'react'
type SidebarAccordeonChildProps = PropsWithChildren<{
    id:string
}>
export const SidebarAccordeonChild:FC<SidebarAccordeonChildProps> = ({id,children}) => {
  return (
    
    <div
      id={`${id}-accordion-child"`}
      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
    >
      <ul className="pt-2 pl-2">
        {children}
      </ul>
    </div>
  )
}
