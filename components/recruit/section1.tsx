import type { NextPage } from 'next';
import Image from 'next/image';

const Section1: NextPage = () => {
  return (
    <div className='relative flex justify-center items-center w-screen h-[602px] lg:h-[500px] md:h-[300px]'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative w-full h-full'>
          <Image
            src='/recruit/section1/background.png'
            alt='Main Background Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      {/* Text */}
      <div className='text-white z-[1]'>
        <h1 className='font-bold text-[68px] text-center lg:text-[48px] md:text-[36px]'>
          채용안내
        </h1>
      </div>
    </div>
  );
};

export default Section1;
