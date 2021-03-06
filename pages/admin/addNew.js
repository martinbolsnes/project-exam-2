import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getTokenFromLocalCookie } from '../../lib/auth';
import Alert from '../../components/alert/alert';
import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import Submenu from '../../components/admin/submenu';
import styles from '../../styles/Home.module.css';

export default function AddNew() {
  useEffect(() => {
    const getPopular = async () => {
      const result = await axios.get(
        'https://project-exam2-backend.herokuapp.com/api/accommodations'
      );
      const res = result?.data.data;
    };
    getPopular();
  }, []);

  const [data, setData] = useState({
    data: {
      name: '',
      location: '',
      price: '',
      description: '',
      image: '',
      recommended: '',
      popular: '',
      rating: '',
    },
  });

  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = getTokenFromLocalCookie();

    try {
      const responseData = await fetch(
        `https://project-exam2-backend.herokuapp.com/api/accommodations`,
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
              location: data.location,
              price: data.price,
              description: data.description,
              image: data.image,
              recommended: data.recommended,
              popular: data.popular,
              rating: data.rating,
            },
          }),
        }
      );
      const result = responseData?.data;
      setData(result);
      Alert('Success!', 'A new accommodation has been created');
      form.current.reset();
    } catch (error) {
      alert('Something went wrong');
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze - Admin</title>
        <meta name='description' content='Administration page for Holidaze' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 xl:mt-20'>
        <h1 className='font-serif2 font-bold lg:text-3xl text-2xl'>
          Admin Dashboard
        </h1>
        <Submenu />
        <section className='mt-4 mb-10 w-full'>
          <div className='alert w-1/2 h-10 rounded-lg text-green font-bold font-serif'></div>
          <form
            ref={form}
            className='flex flex-col w-1/2'
            onSubmit={handleSubmit}
          >
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              className={styles.searchInput}
              onChange={handleChange}
              required
            ></input>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              className={styles.searchInput}
              onChange={handleChange}
              required
            ></input>
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              name='price'
              className={styles.searchInput}
              onChange={handleChange}
              required
            ></input>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              name='description'
              className={styles.searchInput}
              onChange={handleChange}
              required
            ></input>
            <label htmlFor='image'>Image URL</label>
            <input
              type='text'
              name='image'
              className={styles.searchInput}
              onChange={handleChange}
              required
            ></input>
            <label htmlFor='recommended'>Recommended</label>
            <select
              name='recommended'
              className={styles.searchInput}
              onChange={handleChange}
              required
            >
              <option value='null'>Default</option>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
            <label htmlFor='popular'>Popular</label>
            <select
              name='popular'
              className={styles.searchInput}
              onChange={handleChange}
              required
            >
              <option value='null'>Default</option>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
            <label htmlFor='rating'>Rating</label>
            <input
              type='text'
              name='rating'
              className={styles.searchInput}
              onChange={handleChange}
              required
            ></input>
            <br />
            <button
              type='submit'
              className='bg-blue-5 rounded py-2 text-white font-serif2'
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
}
