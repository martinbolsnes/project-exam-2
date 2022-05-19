import Logo from '../header/logo';
import styles from '../../styles/Home.module.css';
import {
  Copyright,
  BrandInstagram,
  BrandMessenger,
  BrandTwitter,
} from 'tabler-icons-react';

export default function FooterSection() {
  return (
    <div className={styles.footer}>
      <div className='flex text-center flex-col lg:flex-row lg:text-left'>
        <div className='flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b-2 border-opacity-25 border-black pb-6 flex-col lg:flex-row lg:w-full'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
              <Logo />
              <div className='h-8 w-auto flex items-center'>
                <h2 className={styles.logoText}>
                  Holida<span className={styles.logoTextSpan}>z</span>e
                </h2>
              </div>
            </div>
            <div className='mt-4'>
              <p className='font-serif opacity-50'>
                Designed and built by Martin Bolsønes
              </p>
              <p className='font-serif opacity-50'>
                Made for educational purposes
              </p>
            </div>
          </div>
          <div className='flex justify-between w-full lg:w-1/2 font-serif mt-4 md:mt-0 lg:mt-0 lg:flex-row flex-col'>
            <div>
              <h3 className='font-serif2 font-bold mb-2'>About</h3>
              <div className='opacity-50 font-serif mb-2 lg:mb-0'>
                <p>Features</p>
                <p>Pricing</p>
                <p>Support</p>
              </div>
            </div>
            <div>
              <h3 className='font-serif2 font-bold mb-2'>Contact</h3>
              <div className='opacity-50 font-serif mb-2 lg:mb-0'>
                <p>FAQ</p>
                <p>Community</p>
                <p>Mail</p>
              </div>
            </div>
            <div>
              <h3 className='font-serif2 font-bold mb-2'>Terms & Conditions</h3>
              <div className='opacity-50 font-serif mb-2 lg:mb-0'>
                <p>Privacy</p>
                <p>Payment</p>
                <p>Booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-16 flex flex-col lg:flex-row mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16'>
        <div className='flex w-full lg:w-1/2 font-serif opacity-50 justify-center lg:justify-start'>
          <Copyright className='mr-1' /> 2020 Holidaze. All right reserved.
        </div>
        <div className='flex w-full lg:w-1/2 justify-center lg:justify-end mt-4 lg:mt-0'>
          <BrandInstagram
            className={styles.footerIcons}
            size={30}
            strokeWidth={1}
          />
          <BrandMessenger
            className={styles.footerIcons}
            size={30}
            strokeWidth={1}
          />
          <BrandTwitter
            className={styles.footerIcons}
            size={30}
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
