import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/header/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Holidaze</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Navbar />
      </header>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
