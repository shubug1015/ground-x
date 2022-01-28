import type { NextPage } from 'next';
import Seo from '@libs/seo';
import Section1 from '@components/home/section1';
import Section2 from '@components/home/section2';
import Section3 from '@components/home/section3';
import Section4 from '@components/home/section4';
import Section5 from '@components/home/section5';
import Section6 from '@components/home/section6';
import Section7 from '@components/home/section7';

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
