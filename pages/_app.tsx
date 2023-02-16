import type { AppProps, NextWebVitalsMetric } from 'next/app'
import '@styles/global.css'
import Layout from '@components/Layout'
import { useTheme } from '../hooks/useTheme'

export default function App({ Component, pageProps }: AppProps) {
  useTheme()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
