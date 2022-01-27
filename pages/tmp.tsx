import Seo from '@libs/seo';
import type { NextPage } from 'next';
import Section1 from '@components/tmp/section1';
import Section2 from '@components/tmp/section2';
import Section3 from '@components/tmp/section3';
import Section4 from '@components/tmp/section4';
import Section5 from '@components/tmp/section5';
import Section6 from '@components/tmp/section6';
import Section7 from '@components/tmp/section7';

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
      <Section7 />
    </>
  );
};

export default Tmp;
