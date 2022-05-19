import Head from 'next/head';
import { useState, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { X } from 'tabler-icons-react';
import { getTokenFromLocalCookie } from '../../lib/auth';
import { useRouter } from 'next/router';

import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import TypeLabel from '../../components/labels/typeLabel';
import BookButton from '../../components/buttons/bookButton';
import ModalBookButton from '../../components/buttons/modalBookButton';
import LocationLabel from '../../components/labels/locationLabel';
import Reviews from '../../components/reviews/reviews';

import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  const res = await axios.get(
    'https://project-exam2-backend.herokuapp.com/api/accommodations?populate=*'
  );
  const result = res.data;
  const id = result?.data;

  const paths = id.map((accommodations) => ({
    params: { id: accommodations.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://project-exam2-backend.herokuapp.com/api/accommodations/${params.id}?populate=*`
  );
  const accommodations = res?.data.data;
  return { props: { accommodations } };
}

const Accommodations = ({ accommodations }) => {
  const router = useRouter();
  const [showMore, setShowMore] = useState();
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState({
    data: {
      message: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      name: '',
    },
  });

  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = getTokenFromLocalCookie();

    try {
      const responseData = await fetch(
        `https://project-exam2-backend.herokuapp.com/api/enquieries`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${jwt}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              message: data.message,
              email: data.email,
              checkIn: data.checkIn,
              checkOut: data.checkOut,
              guests: data.guests,
              name: data.name,
            },
          }),
        }
      );
      const result = responseData?.data;
      setData(result);
      router.push('/bookConfirmation');
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
        <title>Holidaze - {accommodations.attributes.name}</title>
        <meta
          name='description'
          content='Discover the details about our accommodation. Find your next stay at Holidaze'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-40'>
        <Navbar />
      </header>
      <main className='mt-4 mx-auto max-w-7xl px-4 sm:mt-2 sm:px-6 md:mt-5 lg:mt-10 lg:px-8 xl:mt-10'>
        <div className={styles.accommodationsImg}>
          <Image
            className={styles.accommodationsImg}
            src={accommodations.attributes.image}
            layout='fill'
            objectFit='cover'
            priority
            alt={accommodations.attributes.name}
          ></Image>
        </div>
        <div className='mt-4'>
          <TypeLabel
            type={accommodations.attributes.categories.data[0].attributes.type}
          ></TypeLabel>
        </div>
        <div className='mt-4 flex flex-col md:flex-row md:justify-between md:items-center'>
          <h1 className='text-3xl font-serif2 font-bold'>
            {accommodations.attributes.name}
          </h1>
          <div className='flex items-center justify-between mt-4 md:mt-0'>
            <p className='mr-4 text-blue-5 text-lg font-bold sm:mr-6'>
              ${accommodations.attributes.price}
              <span className='text-black opacity-50 font-medium'>
                {' '}
                /per night
              </span>{' '}
            </p>
            <div onClick={() => setShowModal(true)}>
              <BookButton name='Book now' />
            </div>
          </div>
        </div>
        <div>
          <LocationLabel location={accommodations.attributes.location} />
        </div>
        <div className='mt-4 md:w-2/3'>
          <p className='font-serif'>
            {showMore
              ? accommodations.attributes.description
              : `${accommodations.attributes.description.substring(0, 390)}`}
            <button
              onClick={() => setShowMore(!showMore)}
              className='text-blue-5'
            >
              {showMore ? 'Show less' : '... Show more'}
            </button>
          </p>
        </div>
        <div className='mt-4 mb-10'>
          <Reviews />
        </div>
        {showModal ? (
          <>
            <div className='mt-10 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative my-6 mx-auto lg:w-full md: max-w-3xl w-11/12'>
                <div className='p-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  <div className='flex items-start justify-between p-5 rounded-t'>
                    <h3 className='text-lg md:text-2xl lg:text-3xl font-semibold font-serif2'>
                      Your trip
                    </h3>
                    <button
                      className='p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className=' h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        <X color='#000000' />
                      </span>
                    </button>
                  </div>
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className='relative flex flex-col lg:pl-6 lg:pr-6'>
                      <div className='flex pt-4 lg:pt-6 gap-2 w-full'>
                        <div className='flex flex-col w-1/2 justify-start'>
                          <label
                            htmlFor='trip-start'
                            className='font-bold font-serif'
                          >
                            Check-In
                          </label>
                          <input
                            className='w-1/2'
                            type='date'
                            id='trip-start'
                            min='2022-05-22'
                            max='2023-05-22'
                            name='CheckIn'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className='flex flex-col w-1/2 justify-start'>
                          <label
                            htmlFor='trip-end'
                            className='font-bold font-serif'
                          >
                            Check-Out
                          </label>
                          <input
                            className='w-1/2'
                            type='date'
                            id='trip-end'
                            min='2022-05-23'
                            max='2023-05-23'
                            name='CheckOut'
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className='flex flex-col lg:pt-6 lg:pb-6 pt-4 pb-4'>
                        <label htmlFor='guest' className='font-bold font-serif'>
                          Guests
                        </label>
                        <select
                          onChange={handleChange}
                          name='guests'
                          className='w-1/4'
                          required
                        >
                          <option value='0'>0</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='6'>6</option>
                          <option value='7'>7</option>
                        </select>
                      </div>
                    </div>
                    <div className='flex flex-col pb-4 pl-6 pr-6 lg:pb-8 lg:pr-8 lg:pl-8'>
                      <div className='flex justify-between pt-4 lg:pt-8 font-serif border-t border-solid border-black border-opacity-40'>
                        <div>
                          <h3>
                            ${accommodations.attributes.price} x number of
                            nights
                          </h3>
                        </div>
                        <div>$Sum</div>
                      </div>
                      <div className='flex justify-between pt-2 lg:pt-4 font-serif border-t border-solid border-black border-opacity-40'>
                        <div>
                          <h3>x number of guests</h3>
                        </div>
                        <div>$Sum</div>
                      </div>
                      <div className='flex justify-between border-t border-b border-solid border-black border-opacity-40 pt-4'>
                        <h3 className='text-blue-5 font-bold font-serif'>
                          Total
                        </h3>
                        <h3 className='text-blue-5 font-bold font-serif'>
                          $Total amount
                        </h3>
                      </div>
                      <div className='pt-4 flex flex-col gap-4'>
                        <input
                          type='text'
                          onChange={handleChange}
                          name='name'
                          placeholder='Name'
                          className={styles.searchInput}
                          required
                        />
                        <input
                          type='text'
                          onChange={handleChange}
                          name='email'
                          placeholder='Email'
                          className={styles.searchInput}
                          required
                        />
                        <textarea
                          onChange={handleChange}
                          name='message'
                          placeholder='Message (Optional)'
                          className={styles.textAreaInput}
                        />
                      </div>
                    </div>
                    <div className='flex items-center justify-end p-6 rounded-b'>
                      <button
                        className='background-transparent font-bold font-serif2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button type='submit'>
                        <ModalBookButton onClick={() => setShowModal(false)}>
                          Book
                        </ModalBookButton>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
};

export default Accommodations;
