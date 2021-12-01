import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/edge-functions-ui/layout'
import { getLayout } from '@vercel/edge-functions-ui'
import '@vercel/edge-functions-ui/globals.css'
// Works too, we're using the one above for demo purposes
// import '@company/ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout title="AB Testing with buckets" path="ab-testing-simple">
      <Component {...pageProps} />
    </Layout>
  )
}