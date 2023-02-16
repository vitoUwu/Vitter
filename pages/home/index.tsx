import { Post } from '@components/Post'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      animate={{ opacity: [0, 1] }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center gap-4 overflow-scroll h-screen pt-4 px-4 scroll-smooth scrollbar-thin"
    >
      <Post liked likes={1} comments={1200} />
      <Post likes={100000000} comments={345000} shares={431000} />
      <Post liked comments={1} likes={1} />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </motion.main>
  )
}
