import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@layout/layout';
import { useHomeRef } from '@libs/useHomeRef';

function MyApp({ Component, pageProps }: AppProps) {
  const homeRef = useHomeRef();

  return (
    <Layout homeRef={homeRef}>
      <Component {...pageProps} homeRef={homeRef} />
    </Layout>
  );
}

export default MyApp;
