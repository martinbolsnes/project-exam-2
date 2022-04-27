import axios from 'axios';
import { useState, useEffect } from 'react';
import HotelIcon from '../icons/hotel';
import HouseIcon from '../icons/house';
import HostelIcon from '../icons/hostel';
import OutdoorsIcon from '../icons/outdoors';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [heroImg, setHeroImg] = useState();
  useEffect(() => {
    const getHeroImg = async () => {
      const result = await axios.get('http://localhost:1337/api/hero-banner');
      const res = result.data.data.attributes.image_url;
      setHeroImg(res);
    };
    getHeroImg();
  });
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <div className='sm:text-center lg:text-left w-full lg:w-3/5'>
        <h1 className='w-4/5 text-4xl tracking-tight font-extrabold font-serif2 text-black sm:text-5xl md:text-6xl text-left'>
          Find and book a great experience in Norway
        </h1>
        <div className='mt-5 sm:mt-8 sm:flex justify-start'>
          <Link href='/search' passHref>
            <div className='rounded-md shadow'>
              <p
                href='/search'
                className='w-full flex items-center justify-center px-8 py-3 text-base font-medium font-serif2 rounded-md text-white bg-blue-5 hover:bg-darkBlue md:py-4 md:text-lg md:px-10'
              >
                Start your search
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className='w-full lg:w-2/5 relative mr-0 lg:mr-20 mt-6 sm:mt-0 flex flex-col sm:flex-row items-center'>
        <div className={styles.heroImg}>
          <Image
            height={3840}
            width={2880}
            layout='fill'
            className={styles.heroImg}
            src={
              'https://raw.githubusercontent.com/martinbolsnes/holidaze-backend/main/public/images/john-o-nolan-6f_ANCcbj3o-unsplash%20(1).jpg'
            }
            alt=''
          ></Image>
        </div>
        <div className={styles.heroEclipse}>
          <p className={styles.heroEclipseText}>
            500+ places to stay across the country
          </p>
        </div>
        <div className='heroIconsDiv hidden md:block'>
          <HotelIcon />
          <HouseIcon />
          <HostelIcon />
          <OutdoorsIcon />
        </div>
      </div>
    </div>
  );
}
