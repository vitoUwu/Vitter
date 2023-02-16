import { Title } from '@components/Title'
import { useRouter } from 'next/router'
import { Button } from '../components/Button'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-center leading-none mb-10">
        <Title size={64} color="var(--primary-500)">
          404
        </Title>
        <Title size={32}>Ops!</Title>
      </div>
      <span className="text-main-800 mb-2">We can't find that page</span>
      <Button active onClick={() => router.push('/home')}>
        Go back home
      </Button>
    </div>
  )
}
