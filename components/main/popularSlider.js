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
        initialSlide: 2,
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

export default function PopularSlider() {
  const [popular, setPopular] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  useEffect(() => {
    const getPopular = async () => {
      const result = await axios.get(
        'https://project-exam2-backend.herokuapp.com/api/accommodations?populate=*'
      );
      const res = result?.data.data;
      setPopular(res);
    };
    getPopular();
    setLoadingSpinner(false);
  }, []);

  return (
    <>
      {!loadingSpinner ? (
        <Slider {...settings}>
          {popular.map((item) => {
            if (item.attributes.popular === true) {
              return (
                <Link href={`accommodations/${item.id}`} passHref key={item.id}>
                  <a>
                    <div className={styles.sliderDiv}>
                      <div className={styles.slideImg}>
                        <Image
                          layout='fill'
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
                        <span className={styles.cardPrice}>
                          {' '}
                          /per night
                        </span>{' '}
                      </p>
                    </div>
                  </a>
                </Link>
              );
            }
          })}
        </Slider>
      ) : (
        <div className='loadingSpinner flex items-center justify-center'>
          <svg
            role='status'
            className='w-8 h-8 mr-2 text-darkBlue animate-spin fill-blue-5'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
        </div>
      )}
    </>
  );
}
