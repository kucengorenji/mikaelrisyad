import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import PageContainer from '../components/layout/Container'

const Home: NextPage = () => {  
  
  return (
    <>
      <Layout>
        <PageContainer>
          <p>Hello Next.js</p>
        </PageContainer>
      </Layout>
    </>
  )
}

export default Home
