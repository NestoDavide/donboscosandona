import Head from 'next/head'
import Layout from '/components/Layout'
import Movies from '/dev/dottorgross/Movies'

export default function Page({data}) {
  return (
    <Layout>
      <Head>
      </Head>
      <Movies data={data} />
    </Layout>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function getStaticProps() {
  const data = await fetcher('http://127.0.0.1:3112/vinyl_records.json')

  return {
    props: {
      data
    }
  }
}


