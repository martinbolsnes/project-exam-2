import { useState } from 'react';
import { fetcher } from '../../lib/api';
import { setToken } from '../../lib/auth';
import Logo from '../../components/header/logo';
import styles from '../../styles/Home.module.css';

const SignIn = () => {
  const [data, setData] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    setToken(responseData);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className='flex flex-col items-center w-full h-screen mt-32'>
      <div className='mb-10 flex-shrink-0 flex items-center'>
        <Logo className='h-8 w-auto' />
        <div className='h-8 w-auto flex items-center'>
          <h2 className={styles.logoText}>
            Holida<span className={styles.logoTextSpan}>z</span>e
          </h2>
        </div>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type='text'
          name='identifier'
          onChange={handleChange}
          placeholder='Username'
          className={styles.searchInput}
          required
        />
        <input
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Password'
          className={styles.searchInput}
          required
        />

        <button className='rounded-md bg-blue-5 p-2 text-white' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
