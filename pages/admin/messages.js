import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/header/navbar';
import FooterSection from '../../components/footer/footer';
import Submenu from '../../components/admin/submenu';

export default function Messages() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const getPopular = async () => {
      const result = await axios.get(
        'https://project-exam2-backend.herokuapp.com/api/messages'
      );
      const res = result?.data.data;
      setResult(res);
    };
    getPopular();
  }, []);

  return (
    <div className='bg-bgColor'>
      <Head>
        <title>Holidaze - Admin</title>
        <meta name='description' content='Administration page for Holidaze' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 xl:mt-20'>
        <h1 className='font-serif2 font-bold lg:text-3xl text-2xl'>
          Admin Dashboard
        </h1>
        <Submenu />
        <section className='mt-4 mb-10 w-full'>
          <table className='font-serif w-full '>
            <tbody>
              <tr className='flex border-b border-solid w-full mb-2'>
                <th className='w-1/6 flex justify-start'>Name</th>
                <th className='w-1/6 flex justify-start'>Email</th>
                <th className='w-1/6 flex justify-start'>Subject</th>
                <th className='w-4/6 flex justify-start'>Message</th>
              </tr>

              {result.map((item) => {
                return (
                  <tr key={item.id} className='flex w-full mb-2'>
                    <td className='w-1/6 flex justify-start'>
                      {item.attributes.name}
                    </td>
                    <td className='w-1/6 flex justify-start'>
                      {item.attributes.email}
                    </td>
                    <td className='w-1/6 flex justify-start'>
                      {item.attributes.subject}
                    </td>
                    <td className='w-4/6 flex justify-start'>
                      {item.attributes.message}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
      <footer className='bg-footerColor'>
        <FooterSection />
      </footer>
    </div>
  );
}
