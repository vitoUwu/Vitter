import clsx from 'clsx'
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  active?: boolean
}

// export function Button({
//   children,
//   className,
//   active = false,
//   ...props
// }: ButtonProps) {
//   return (
//     <button
//       {...props}
//       className={clsx(
//         'rounded-lg text-main-900 p-2 flex gap-3 items-center transition-all group',
//         'ring-2 ring-transparent outline-none',
//         className,
//         {
//           'bg-primary-500 text-white font-bold focus:ring-primary-300': active,
//           'hover:bg-primary-500 hover:text-white focus:ring-primary-500':
//             !active,
//         }
//       )}
//     >
//       {children}
//     </button>
//   )
// }

export const Button = forwardRef(
  (
    { children, className, active = false, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          'rounded-lg text-main-900 p-2 flex gap-3 items-center transition-all group',
          'ring-2 ring-transparent outline-none',
          className,
          {
            'bg-primary-500 text-white font-bold focus:ring-primary-300':
              active,
            'hover:bg-primary-500 hover:text-white focus:ring-primary-500':
              !active,
          }
        )}
      >
        {children}
      </button>
    )
  }
)
