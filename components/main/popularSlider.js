import axios from 'axios';
import { useState, useEffect } from 'react';
import { Star } from 'tabler-icons-react';
import Image from 'next/image';
import Slider from 'react-slick';

import styles from '../../styles/Home.module.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
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
      <Slider {...settings}>
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
      </Slider>
    </>
  );
}
