import axios from 'axios';
import { useState, useEffect } from 'react';
import { Star } from 'tabler-icons-react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from '@ant-design/react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Main.module.css';

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default function RecommendedSlider() {
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    const getRecommended = async () => {
      const result = await axios.get(
        'https://project-exam2-backend.herokuapp.com/api/accommodations?populate=*'
      );
      const res = result?.data.data;
      console.log(res);
      setRecommended(res);
    };
    getRecommended();
  }, []);
  return (
    <Slider {...settings}>
      {recommended.map((item) => {
        if (item.attributes.recommended === true) {
          return (
            <Link href={`accommodations/${item.id}`} passHref key={item.id}>
              <a>
                <div className={styles.sliderDiv}>
                  <div className={styles.slideImg}>
                    <Image
                      layout='fill'
                      objectFit='cover'
                      className={styles.slideImg}
                      src={item.attributes.image}
                      alt=''
                    ></Image>
                  </div>
                  <div className='flex justify-between pl-2'>
                    <h2 className={styles.cardHeading}>
                      {item.attributes.name}
                    </h2>
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
              </a>
            </Link>
          );
        }
      })}
    </Slider>
  );
}
