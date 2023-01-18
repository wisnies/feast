import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components/layout/Layout';
import GlobalStyle from '@/styles/global';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Feast' />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
