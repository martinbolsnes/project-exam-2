import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'tabler-icons-react';

import styles from '../../styles/Home.module.css';

export default function SearchResults() {
  const [allResults, setAllResults] = useState([]);
  useEffect(() => {
    const getSearchResults = async () => {
      const result = await axios.get(
        'http://localhost:1337/api/accommodations?populate=*'
      );
      const res = result?.data.data;
      console.log(res);
      setAllResults(res);
    };
    getSearchResults();
  }, []);
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {allResults.map((accommodations) => (
        <Link
          href={`accommodations/${accommodations.id}`}
          passHref
          key={accommodations.id}
        >
          <a>
            <div>
              <div className={styles.slideImg}>
                <Image
                  layout='fill'
                  objectFit='cover'
                  className={styles.slideImg}
                  src={accommodations.attributes.card_image}
                  alt={accommodations.name}
                ></Image>
              </div>
              <div className='flex justify-between pl-2'>
                <h2 className={styles.cardHeading}>
                  {accommodations.attributes.name}
                </h2>
                <div className='flex items-center pr-6'>
                  <Star color='#ead200' size={20} fill='#ead200' />
                  <p className='pl-2'>{accommodations.attributes.rating}</p>
                </div>
              </div>
              <p className={styles.cardTextDiv}>
                ${accommodations.attributes.price}
                <span className={styles.cardPrice}> /per night</span>
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
