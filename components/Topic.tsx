import { CaretRight } from 'phosphor-react'
import { Title } from './Title'

export function Topic() {
  return (
    <a
      referrerPolicy="no-referrer"
      href="#"
      className="w-full bg-main-100 rounded-lg text-left py-2 px-3 leading-tight flex justify-between items-center group outline-none focus:ring-2 focus:ring-primary-500"
    >
      <div>
        <Title>Topic</Title>
        <span className="text-main-400 text-sm">25k Vittes</span>
      </div>
      <CaretRight
        size={24}
        style={{ color: 'var(--primary-500)' }}
        weight="bold"
        className="group-hover:translate-x-1 transition-transform"
      />
    </a>
  )
}
