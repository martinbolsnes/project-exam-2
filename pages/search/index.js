import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'tabler-icons-react';
import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import SearchButton from '../../components/buttons/searchButton';
import FilterButton from '../../components/buttons/filterButton';
import Types from '../../components/search/types';

import styles from '../../components/main/Main.module.css';

export default function Search() {
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    const getSearchResults = async () => {
      const result = await axios.get(
        'https://project-exam2-backend.herokuapp.com/api/accommodations?populate=*'
      );
      const res = result?.data.data;
      setAllResults(res);
    };
    getSearchResults();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredResults = allResults.filter((item) => {
        return Object.values(item.attributes.name)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredResults);
    } else {
      setFilteredResults(allResults);
    }
  };
  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze - Search</title>
        <meta
          name='description'
          content='Find your next stay in Norway. Discover the Holidaze selection of hotels, hostels, cabins and apartments.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <div className='flex justify-between w-full'>
          <div className='flex w-4/5'>
            <div className='w-1/2'>
              <input
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
                className='rounded-md pl-4 border border-solid border-black border-opacity-50 w-full h-10'
              ></input>
            </div>
            <SearchButton />
          </div>
          <div>
            <FilterButton />
          </div>
        </div>
        <h2 className='font-extrabold font-serif2 text-black text-xl mt-5'>
          Types
        </h2>
        <div className='flex mt-5'>
          <Types />
        </div>
        <section className='mt-10 mb-10'>
          <h2 className='font-extrabold font-serif2 text-black text-2xl mt-5'>
            Results
          </h2>
          <div className='w-full mt-5'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {searchInput.length > 1
                ? filteredResults.map((item) => {
                    return (
                      <Link
                        href={`accommodations/${item.id}`}
                        passHref
                        key={item.id}
                      >
                        <a>
                          <div>
                            <div className={styles.slideImg}>
                              <Image
                                layout='fill'
                                objectFit='cover'
                                className={styles.slideImg}
                                src={item.attributes.image}
                                alt={item.name}
                              ></Image>
                            </div>
                            <div className='flex justify-between pl-2'>
                              <h2 className={styles.cardHeading}>
                                {item.attributes.name}
                              </h2>
                              <div className='flex items-center pr-6'>
                                <Star
                                  color='#ead200'
                                  size={20}
                                  fill='#ead200'
                                />
                                <p className='pl-2'>{item.attributes.rating}</p>
                              </div>
                            </div>
                            <p className={styles.cardTextDiv}>
                              ${item.attributes.price}
                              <span className={styles.cardPrice}>
                                {' '}
                                /per night
                              </span>
                            </p>
                          </div>
                        </a>
                      </Link>
                    );
                  })
                : allResults.map((item) => {
                    return (
                      <Link
                        href={`accommodations/${item.id}`}
                        passHref
                        key={item.id}
                      >
                        <a>
                          <div>
                            <div className={styles.slideImg}>
                              <Image
                                layout='fill'
                                objectFit='cover'
                                className={styles.slideImg}
                                src={item.attributes.image}
                                alt={item.name}
                              ></Image>
                            </div>
                            <div className='flex justify-between pl-2'>
                              <h2 className={styles.cardHeading}>
                                {item.attributes.name}
                              </h2>
                              <div className='flex items-center pr-6'>
                                <Star
                                  color='#ead200'
                                  size={20}
                                  fill='#ead200'
                                />
                                <p className='pl-2'>{item.attributes.rating}</p>
                              </div>
                            </div>
                            <p className={styles.cardTextDiv}>
                              ${item.attributes.price}
                              <span className={styles.cardPrice}>
                                {' '}
                                /per night
                              </span>
                            </p>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
}
