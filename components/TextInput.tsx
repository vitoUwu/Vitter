import { InputHTMLAttributes, ReactNode } from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  children?: ReactNode
}

export function TextInput({ label, children, ...props }: TextInputProps) {
  return (
    <>
      {label && (
        <label className="text-sm text-main-500" htmlFor={props.name}>
          {label}
        </label>
      )}
      <div className="border text-sm h-9 border-main-400 rounded-lg bg-main-100 text-main-800 outline-none focus-within:ring-1 focus-within:ring-primary-500 flex justify-center items-center pr-3 gap-3">
        <input
          className="h-9 w-full bg-transparent px-3 outline-none"
          type="text"
          {...props}
        />
        {children}
      </div>
    </>
  )
}
