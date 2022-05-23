import Head from 'next/head';
import { CircleCheck } from 'tabler-icons-react';
import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import Logo from '../../components/header/logo';

import styles from '../../styles/Home.module.css';

export default function ConfirmationPage() {
  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze - Your trip is booked</title>
        <meta
          name='description'
          content='Your trip is booked. Thank you for choosing Holidaze'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='h-screen mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-22'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='font-serif text-2xl text-center'>
            <p>Your trip has been booked!</p>
          </div>
          <div>
            <CircleCheck size={60} fill='#00b341' color='#eeeeee' />
          </div>
          <div className='font-serif text-xl text-center'>
            <p>A booking confirmation has been sent to your email</p>
          </div>
          <div className='flex mt-20'>
            <Logo />
            <div className='h-8 w-auto flex items-center'>
              <h2 className={styles.logoText}>
                Holida<span className={styles.logoTextSpan}>z</span>e
              </h2>
            </div>
          </div>
          <div className='font-serif text-lg text-center'>
            <p>
              Thank you for using Holidaze and we wish you a pleasant journey
            </p>
          </div>
        </div>
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
}
