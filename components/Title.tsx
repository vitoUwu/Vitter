import { ReactNode } from 'react'

type TitleProps = {
  children: ReactNode
  size?: number
  color?: string
}

export function Title({
  children,
  size = 16,
  color = 'var(--main-900)',
}: TitleProps) {
  return (
    <h1 className="font-bold text-main-800" style={{ fontSize: size, color }}>
      {children}
    </h1>
  )
}
