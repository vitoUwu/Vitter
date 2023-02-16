import { Title } from '@components/Title'
import { useTheme } from '@hooks/useTheme'
import * as Switch from '@radix-ui/react-switch'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Settings() {
  const [isDark, setDark] = useTheme()

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-4 overflow-scroll h-screen pt-4 px-4 scroll-smooth scrollbar-thin"
    >
      <div className="bg-main-100 text-main-900 rounded h-full w-full p-4">
        <div className="grid grid-cols-2 grid-rows-1 items-center">
          <div>
            <Title size={18}>Dark Mode</Title>
            <p className="text-main-500">Toggle dark mode</p>
          </div>
          <Switch.Root
            checked={isDark}
            onCheckedChange={setDark}
            className="bg-main-200 p-1 h-7 w-12 rounded-full justify-self-end"
          >
            <Switch.Thumb
              className={clsx(
                'block bg-main-400 h-5 aspect-square rounded-full',
                'data-[state="checked"]:translate-x-full transition-all',
                'data-[state="checked"]:bg-primary-500'
              )}
            />
          </Switch.Root>
        </div>
      </div>
    </motion.div>
  )
}
