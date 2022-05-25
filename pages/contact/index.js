import Head from 'next/head';
import { useState, useRef } from 'react';
import { getTokenFromLocalCookie } from '../../lib/auth';
import {
  BrandInstagram,
  BrandMessenger,
  BrandTwitter,
  Mail,
} from 'tabler-icons-react';
import Alert from '../../components/alert/alert';
import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import BookButton from '../../components/buttons/bookButton';
import styles from '../../styles/Home.module.css';

export default function Contact() {
  const [data, setData] = useState({
    data: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = getTokenFromLocalCookie();

    try {
      const responseData = await fetch(
        `https://project-exam2-backend.herokuapp.com/api/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${jwt}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message,
            },
          }),
        }
      );
      const result = responseData?.data;
      setData(result);
      Alert('Success!', 'Message has been sent');
      form.current.reset();
    } catch (error) {
      alert('Something went wrong!');
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze - Contact</title>
        <meta
          name='description'
          content='Contact us at Holidaze through our contact form. We will answer your questions within 1 hour.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='h-screen mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-22'>
        <div>
          <h1 className='font-serif2 font-bold text-3xl mb-6'>Contact</h1>
        </div>
        <div className='alert w-1/2 h-10 rounded-lg text-green font-bold font-serif'></div>
        <div className='flex flex-col md:flex-row w-full'>
          <form
            ref={form}
            className='flex flex-col md:w-1/2 w-full'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col gap-4'>
              <input
                type='text'
                name='name'
                className={styles.searchInput}
                onChange={handleChange}
                placeholder='Name'
                required
              ></input>
              <input
                type='text'
                name='email'
                className={styles.searchInput}
                onChange={handleChange}
                placeholder='Email'
                required
              ></input>
              <input
                type='text'
                name='subject'
                className={styles.searchInput}
                onChange={handleChange}
                placeholder='Subject'
              ></input>
              <textarea
                name='message'
                className={styles.textAreaInput}
                onChange={handleChange}
                placeholder='Message'
                required
              ></textarea>
            </div>
            <button className='w-1/2 self-center mt-4' type='submit'>
              <BookButton name='Send' />
            </button>
          </form>

          <div className='flex flex-col md:w-1/2 w-full items-center mt-10 md:mt-6 gap-6'>
            <div>
              <p className='font-serif opacity-60 text-center'>
                or contact us at our social media channels
              </p>
            </div>
            <div>
              <div className='flex gap-4'>
                <BrandInstagram size={40} strokeWidth={1} color='#2196f3' />
                <BrandMessenger size={40} strokeWidth={1} color='#2196f3' />
                <BrandTwitter size={40} strokeWidth={1} color='#2196f3' />
              </div>
            </div>
            <div className='w-2/4'>
              <p className='font-serif opacity-60 text-center'>
                If you have any questions regarding your booking please send us
                an email with your booking number
              </p>
            </div>
            <div>
              <Mail size={40} strokeWidth={1} color='#2196f3' />
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
}
