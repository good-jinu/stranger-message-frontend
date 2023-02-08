import Layout from '@/components/Layout';
import { getCookie } from '@/utils/cookieIO';
import { decodeJWT } from '@/utils/jwt';

export default function Home() {
  return (
    <>
      <Layout>
        <h1>This is Body</h1>
      </Layout>
    </>
  )
}
