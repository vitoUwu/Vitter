import { Button } from '@components/Button'
import { SideBar } from '@components/Sidebar'
import { TextInput } from '@components/TextInput'
import { Title } from '@components/Title'
import { Topic } from '@components/Topic'
import { useRouter } from 'next/router'
import { Gear, House, MagnifyingGlass, PaperPlaneTilt } from 'phosphor-react'
import { ReactNode, useEffect, useRef } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const topicsRef = useRef<HTMLDivElement>(null!)
  const router = useRouter()

  function handleKeyDown(event: KeyboardEvent) {
    // console.log(event.key)
    if (event.altKey) {
      switch (event.key) {
        case 'h':
          return router.push('/home')
        case 's':
          return router.push('/settings')
        case 't':
          return topicsRef.current.focus()
        case '/':
          return alert(
            'Alt + H: Go Home\nAlt + S: Open Settings\nAlt + T: Focus Topics'
          )
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <div className="block screen-100:grid screen-100:grid-cols-100 screen-200:grid-cols-200 screen-300:grid-cols-300 grid-rows-1 items-center justify-between bg-main-200">
        <SideBar className="hidden screen-100:block w-14 screen-300:w-72">
          <div className="flex justify-center invisible screen-300:visible">
            <Title>Welcome Back, Jane!</Title>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              className="w-full justify-center items-center screen-300:justify-start"
              active={router.pathname === '/home' || router.pathname === '/'}
              onClick={() => router.push('/home')}
            >
              <House size={24} />
              <span className="hidden screen-300:block">Home</span>
            </Button>
            <Button
              className="w-full justify-center items-center screen-300:justify-start"
              active={router.pathname === '/settings'}
              onClick={() => router.push('/settings')}
            >
              <Gear size={24} />
              <span className="hidden screen-300:block">Settings</span>
            </Button>
          </div>
        </SideBar>

        {/* main content */}

        {children}

        {/* main content */}

        <SideBar className="hidden screen-200:block">
          <div className="flex flex-col gap-2 h-full">
            <div className="flex flex-col">
              <TextInput placeholder="Search in Vitter" name="search-bar">
                <MagnifyingGlass
                  color="var(--main-500)"
                  size={18}
                  weight="bold"
                />
              </TextInput>
            </div>
            <div
              ref={topicsRef}
              tabIndex={-1}
              onMouseDown={(event) => event.preventDefault()}
              className="bg-main-200 rounded-lg p-2 text-center flex flex-col gap-2 outline-none focus:ring-2 focus:ring-primary-500"
            >
              <Title size={20}>Trending Topics</Title>
              <Topic />
              <Topic />
              <Topic />
              <Topic />
            </div>
            <Button className="w-full mt-auto flex justify-center" active>
              <PaperPlaneTilt size={24} />
              <span>Direct Messages</span>
            </Button>
          </div>
        </SideBar>
      </div>
      <div className="screen-100:hidden grid grid-rows-1 grid-flow-col justify-center items-center gap-3 px-3 fixed bottom-0 w-full h-16 bg-main-100">
        <Button
          className="w-fit h-fit justify-center items-center"
          active={router.pathname === '/home' || router.pathname === '/'}
          onClick={() => router.push('/home')}
        >
          <House size={24} />
        </Button>
        <Button
          className="w-fit h-fit justify-center items-center"
          active={router.pathname === '/settings'}
          onClick={() => router.push('/settings')}
        >
          <Gear size={24} />
        </Button>
      </div>
    </>
  )
}
