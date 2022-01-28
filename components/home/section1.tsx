import type { NextPage } from 'next';
import Image from 'next/image';
// import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';

const Section1: NextPage = () => {
  return (
    <div className='relative w-screen h-screen bg-black'>
      {/* 전체 배경 이미지 */}
      <Image
        src='/home/section1/background.png'
        alt='Main Background Image'
        layout='fill'
        objectFit='cover'
        priority
        className='lg:!hidden'
      />

      <Image
        src='/home/section1/background-lg.png'
        alt='Main Background Image'
        layout='fill'
        objectFit='cover'
        // priority
        className='!hidden lg:!block'
      />

      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center lg:items-start'>
        {/* 메인 텍스트 이미지 */}
        <div
          // data-aos='fade-up'
          // data-aos-duration='1000'
          className='relative max-w-[522px] max-h-[278.2px] w-[30vw] min-w-[480px] min-h-[255.84px] aspect-[1/0.533] lg:aspect-auto md:aspect-auto lg:w-[560px] lg:h-[298.1px] md:w-[279px] md:h-[148.7px] animate-[fadeUp_1s_ease-in-out]'
        >
          <Image
            src='/home/section1/main-title.png'
            alt='Main Title'
            layout='fill'
            objectFit='cover'
          />
        </div>

        {/* 메인 텍스트 이미지 하단 텍스트 */}
        <div
          // data-aos='fade-up'
          // data-aos-duration='1500'
          // data-aos-delay='300'
          // data-aos-offset='0'
          className='text-[24px] text-white font-medium mt-[44.4px] lg:text-[36px] lg:leading-[1.8] lg:mt-[60px] md:text-[18px] md:mt-[28px] animate-[fadeUp_1.2s_ease-in-out]'
        >
          그라운드엑스가 NFT로 <br className='hidden lg:block md:hidden' />
          새로운 <br className='hidden md:block' />
          디지털 세상을 만들어갑니다.
        </div>
      </div>

      {/* 하단 화살표 아이콘 */}
      <div className='absolute bottom-[20px] left-1/2 -translate-x-1/2'>
        <div className='relative w-[48px] aspect-square animate-bounce'>
          <Image
            src='/tmp/2/section1/arrow.png'
            alt='Main Arrow Icon'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
