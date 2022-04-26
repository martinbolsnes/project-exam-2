import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/header/navbar';
import Hero from '../components/main/hero';
import RecommendedSlider from '../components/main/recommendedSlider';
import PopularSlider from '../components/main/popularSlider';
import FooterSection from '../components/footer/footer';

export default function Home() {
  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <Hero />
        <div className={styles.sliderSection}>
          <h2 className={styles.sectionHeading}>Recommended</h2>
          <RecommendedSlider className='mt-10' />
          <h2 className={styles.sectionHeading}>Popular</h2>
          <PopularSlider />
        </div>
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
}
