import Seo from 'utils/Seo';
import type { NextPage } from 'next';
import Section1 from '@components/home/Section1';
import Section2 from '@components/home/Section2';
import Section3 from '@components/home/Section3';
import Section4 from '@components/home/Section4';
import Section5 from '@components/home/Section5';
import Section6 from '@components/home/Section6';
import Section7 from '@components/home/Section7';

const Home: NextPage = () => {
  return (
    <>
      <Seo title='Home' />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
};

export default Home;
