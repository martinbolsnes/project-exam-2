import axios from 'axios';
import { useState, useEffect } from 'react';
import HotelIcon from '../icons/hotel';
import HouseIcon from '../icons/house';
import HostelIcon from '../icons/hostel';
import OutdoorsIcon from '../icons/outdoors';
import styles from '../../styles/Home.module.css';

export default function Hero() {
  const [heroImg, setHeroImg] = useState();
  useEffect(() => {
    const getHeroImg = async () => {
      const result = await axios.get('http://localhost:1337/api/hero-banner');
      const res = result.data.data.attributes.image_url;
      console.log(res);
      setHeroImg(res);
    };
    getHeroImg();
  });
  return (
    <div className='flex items-center'>
      <div className='sm:text-center lg:text-left w-3/5'>
        <h1 className='w-4/5 text-4xl tracking-tight font-extrabold font-serif2 text-black sm:text-5xl md:text-6xl'>
          Find and book a great experience in Norway
        </h1>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <a
              href='/search'
              className='w-full flex items-center justify-center px-8 py-3 text-base font-medium font-serif2 rounded-md text-white bg-blue-5 hover:bg-darkBlue md:py-4 md:text-lg md:px-10'
            >
              Start your search
            </a>
          </div>
        </div>
      </div>
      <div className='w-2/5 relative mr-20 flex'>
        <img className={styles.heroImg} src={heroImg}></img>
        <div className={styles.heroEclipse}>
          <p className={styles.heroEclipseText}>
            500+ places to stay across the country
          </p>
        </div>
        <div className='heroIconsDiv'>
          <HotelIcon />
          <HouseIcon />
          <HostelIcon />
          <OutdoorsIcon />
        </div>
      </div>
    </div>
  );
}
