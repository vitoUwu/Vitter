import { useRouter } from 'next/router'
import { Basketball } from 'phosphor-react'
import { useEffect } from 'react'

export default function App() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])

  return (
    <div className="flex justify-center items-center text-primary-500">
      <Basketball size={64} className="animate-spin" />
    </div>
  )
}
