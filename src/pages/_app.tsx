import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '@/components/layout/Layout';
import queryClient from '@/libs/queryClient';
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
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
