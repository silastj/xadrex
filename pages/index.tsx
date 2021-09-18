import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tabuleiro from '../components/tabuleiro/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabuleiro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Tabuleiro/>
    </div>
  )
}
