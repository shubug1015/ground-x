import type { NextPage } from 'next';
import Image from 'next/image';

const Section1: NextPage = () => {
  return (
    <div className='relative flex justify-center items-center w-screen h-screen'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative w-full h-full'>
          <Image
            src='/home/section1/background.png'
            alt='Main Background Image'
            layout='fill'
          />
        </div>
      </div>

      {/* Text */}
      <div className='text-white z-[1]'>
        <h1 className='font-bold text-[68px] text-center'>
          누구나 크리에이터가 되는 세상
        </h1>
        <h2 className='font-medium text-[38px] text-center mt-[40px]'>
          그라운드엑스가 NFT로 새로운 디지털 세상을 만들어갑니다.
        </h2>
      </div>

      {/* 하단 Arrow Icon */}
      <div className='absolute bottom-[20px] left-1/2 -translate-x-1/2'>
        <div className='relative w-[48px] aspect-square'>
          <Image
            src='/home/section1/arrow.png'
            alt='Main Arrow Icon'
            layout='fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
