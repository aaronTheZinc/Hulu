
import Head from 'next/head'
import Header from '../components/Header/header'
import Nav from '../components/Nav/nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>
          Hulu
        </title>
      </Head>
 

      {/* Header */}
      <Header />
      {/* Nav Bar */}
      <Nav/>
      {/* Results */}
    </div>
  )
}
