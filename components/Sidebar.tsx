import clsx from 'clsx'
import { ReactNode } from 'react'

type SideBarProps = {
  children: ReactNode
  className?: string
}

export function SideBar({ children, className }: SideBarProps) {
  return (
    <aside
      className={clsx('bg-main-100 rounded-lg h-screen p-2', {
        'w-72': !className?.includes('w-'),
        [`${className}`]: !!className,
      })}
    >
      {children}
    </aside>
  )
}
