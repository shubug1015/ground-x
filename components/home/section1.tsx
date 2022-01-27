import { useScroll } from '@libs/useScroll';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Section1: NextPage = () => {
  const { y } = useScroll();

  const typingTextRef = useRef<any>(null);

  let i = 0;

  useEffect(() => {
    let typingText = typingTextRef.current.innerText;
    let speed = 100;
    let flag = 0;

    function typeWriter() {
      if (flag == 0) {
        if (i == typingText.length) {
          flag = 1;
        }
        typingText += typingText.charAt(i);
        i++;
      }
      if (flag == 1) {
        if (i == 0) {
          flag = 0;
        }
        typingText = typingText.slice(0, i);
        i--;
      }
    }

    setInterval(typeWriter, speed);
  }, [i]);

  return (
    <div
      className='absolute left-0 flex justify-center items-center w-screen h-screen z-10'
      style={{
        top: -y,
        opacity: (460 - y) / 460,
      }}
      // className='relative flex justify-center items-center w-screen h-screen'
    >
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative w-full h-full'>
          <Image
            src='/home/section1/background.png'
            alt='Main Background Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      {/* Text */}
      <div className='text-white z-[1] lg:w-[720px] md:w-[330px]'>
        <h1 className='font-bold text-[68px] text-center lg:text-[48px] md:text-[36px] md:leading-[1.4]'>
          누구나 <span ref={typingTextRef}>크리에이터</span>가 되는 세상
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
