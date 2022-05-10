import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import '../styles/Home.module.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
