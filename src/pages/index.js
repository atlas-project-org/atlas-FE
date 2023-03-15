import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Game homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page">
        <div className="header-container">
          <h1 className="header">Welcome to the <br/> &lt;insert game name here&gt;</h1>
        </div>

        <div className="button-container">
          <button className="start-btn">Start <br/> Adventure</button>
        </div>
      </main>
    </>
  )
}
