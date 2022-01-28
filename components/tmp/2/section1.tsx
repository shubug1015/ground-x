import { useScroll } from '@libs/useScroll';
import type { NextPage } from 'next';
import Image from 'next/image';

const Section1: NextPage = () => {
  const { y } = useScroll();

  return (
    <div
      // className='absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-10'
      // style={{
      //   top: y > 465 ? -465 : -y,
      //   opacity: y > 465 ? 0 : y === 0 ? 1 : (460 - y) / 460,
      // }}
      className='relative flex justify-center items-center w-screen h-screen z-[10]'
    >
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-screen h-screen'>
        <div className='relative w-screen h-screen'>
          <Image
            src='/tmp/2/section1/background.png'
            alt='Main Background Image'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </div>

      {/* Text */}
      <div className='text-white z-[1] lg:w-[720px] md:w-[330px]'>
        <h1 className='font-bold text-[68px] text-center lg:text-[48px] md:text-[36px] md:leading-[1.4]'>
          누구나 크리에이터가 되는 세상
        </h1>
        <h2 className='font-medium text-[38px] text-center mt-[40px] lg:text-[28px] md:text-[18px] md:mt-[28px]'>
          그라운드엑스가 NFT로 새로운 <br className='hidden md:block' />
          디지털 세상을 만들어갑니다.
        </h2>
      </div>

      {/* 하단 Arrow Icon */}
      <div className='absolute bottom-[20px] left-1/2 -translate-x-1/2'>
        <div className='relative w-[48px] aspect-square animate-bounce'>
          <Image
            src='/tmp/2/section1/arrow.png'
            alt='Main Arrow Icon'
            layout='fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
