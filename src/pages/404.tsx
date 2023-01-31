import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import OffHero from '@/components/hero/OffHero';
import { Button, SingleButtonContainer } from '@/styles/buttons';
import { PageContainer } from '@/styles/page';
import { Text } from '@/styles/typography';

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace(
      `/`,
      {
        pathname: '/',
      },
      {
        shallow: true,
      }
    );
  };
  return (
    <>
      <Head>
        <title>Error | Feast BBQ</title>
      </Head>
      <OffHero text='The page does not exists' />
      <PageContainer>
        <Text align='center'>Page you were looking for does not exists.</Text>
        <SingleButtonContainer>
          <Button position='right' color='primary' onClick={handleClick}>
            Homepage
          </Button>
        </SingleButtonContainer>
      </PageContainer>
    </>
  );
};

export default NotFoundPage;
