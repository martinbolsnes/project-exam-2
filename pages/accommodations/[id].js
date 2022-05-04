import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import TypeLabel from '../../components/labels/typeLabel';
import BookButton from '../../components/buttons/bookButton';
import LocationLabel from '../../components/labels/locationLabel';
import Reviews from '../../components/reviews/reviews';
import DateSelect from '../../components/inputs/dateInput';

import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  const res = await axios.get(
    'http://localhost:1337/api/accommodations?populate=*'
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
    `http://localhost:1337/api/accommodations/${params.id}?populate=*`
  );
  const accommodations = res?.data.data;
  return { props: { accommodations } };
}

const Accommodations = ({ accommodations }) => {
  const [showMore, setShowMore] = useState();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-40'>
        <Navbar />
      </header>
      <main className='mt-4 mx-auto max-w-7xl px-4 sm:mt-2 sm:px-6 md:mt-5 lg:mt-10 lg:px-8 xl:mt-10'>
        <div className={styles.accommodationsImg}>
          <Image
            className={styles.accommodationsImg}
            src={accommodations.attributes.card_image}
            layout='fill'
            objectFit='cover'
            alt={accommodations.attributes.name}
          ></Image>
        </div>
        <div className='mt-4'>
          <TypeLabel
            type={accommodations.attributes.categories.data[0].attributes.name}
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
              <BookButton />
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
              <div className='relative w-full my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className='p-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-black border-opacity-50 rounded-t'>
                    <h3 className='text-3xl font-semibold font-serif2'>
                      Your trip
                    </h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-6 flex justify-between'>
                    <DateSelect name='Check-in' />
                    <DateSelect name='Check-out' />
                  </div>
                  {/*footer*/}
                  <div className='flex items-center justify-end p-6 border-t border-solid border-black border-opacity-50 rounded-b'>
                    <button
                      className='background-transparent font-bold font-serif2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <BookButton onClick={() => setShowModal(false)}>
                      Book
                    </BookButton>
                  </div>
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
