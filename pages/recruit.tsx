import type { NextPage } from 'next';
import Seo from '@libs/seo';
import Section1 from '@components/recruit/section1';
import Section2 from '@components/recruit/section2';
import Section3 from '@components/recruit/section3';
import Section4 from '@components/recruit/section4';

const Recruit: NextPage = () => {
  return (
    <>
      <Seo title='Recruit' />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Recruit;
