import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Star } from 'tabler-icons-react';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function PopularSlider() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const getPopular = async () => {
      const result = await axios.get(
        'http://localhost:1337/api/accommodations?populate=*'
      );
      const res = result?.data.data;
      console.log(res);
      setPopular(res);
    };
    getPopular();
  }, []);
  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass='w-full'
      >
        {popular.map((item) => {
          if (item.attributes.popular === true) {
            return (
              <div className={styles.sliderDiv} key={item.id}>
                <div className={styles.slideImg}>
                  <Image
                    width={1000}
                    height={1000}
                    layout='fill'
                    className={styles.slideImg}
                    src={item.attributes.card_image}
                    alt=''
                  ></Image>
                </div>
                <div className='flex justify-between pl-2'>
                  <h2 className={styles.cardHeading}>{item.attributes.name}</h2>
                  <div className='flex items-center pr-6'>
                    <Star color='#EAD200' size={20} fill='#EAD200'></Star>
                    <p className='pl-2'>{item.attributes.rating}</p>
                  </div>
                </div>
                <p className={styles.cardTextDiv}>
                  ${item.attributes.price}
                  <span className={styles.cardPrice}> /per night</span>{' '}
                </p>
              </div>
            );
          }
        })}
      </Carousel>
    </>
  );
}
