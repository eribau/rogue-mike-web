import Head from 'next/head'
import Layout from '../components/layout'
import Content from '../components/content'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rogue Mike</title>
        <meta name="description" content="Webpage for the game Rogue Mike" />
      </Head>
      <section>
        <Content/>
      </section>
    </Layout>
  )
}
