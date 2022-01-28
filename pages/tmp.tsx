import type { NextPage } from 'next';
import Seo from '@libs/seo';
import Section1 from '@components/tmp/2/section1';
import Section2 from '@components/tmp/2/section2';
import Section3 from '@components/tmp/2/section3';
import Section4 from '@components/tmp/2/section4';
import Section5 from '@components/tmp/2/section5';
import Section6 from '@components/tmp/2/section6';

const Tmp: NextPage = () => {
  return (
    <>
      <Seo title='Tmp' />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
};

export default Tmp;
