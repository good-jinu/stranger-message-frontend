import { Inter } from '@next/font/google'
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className={inter.className}>This is Stranger massenger</h1>
      </Layout>
    </>
  )
}