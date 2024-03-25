import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Almanac Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Almanac Man" />
        <p className="description">
          <a href="/shows">Shows</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
