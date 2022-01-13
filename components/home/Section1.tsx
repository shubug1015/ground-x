import type { NextPage } from 'next';
import Image from 'next/image';
import { useScroll } from '@utils/useScroll';

const Section1: NextPage = () => {
  const MAIN_SECTION_HEIGHT = 3000;

  const { y } = useScroll();
  const scrollRatio = (y / MAIN_SECTION_HEIGHT) * 100;

  return (
    <div
      className='relative h-[4000px]'
      style={{
        opacity: `${scrollRatio > 95 ? (115 - scrollRatio) / 40 : 1}`,
      }}
    >
      <div
        className='fixed mx-w-none w-screen h-screen'
        style={{
          transform: `scale(${
            1 + scrollRatio / 100 < 1.5 && 1 + scrollRatio / 100
          })`,
        }}
      >
        <Image
          src='/home/main.png'
          alt='Home Main Image'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <h1
        className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center text-[4.25rem] text-white font-bold leading-[1.5] sm:text-3xl sm:leading-[1.5]'
        style={{
          opacity: `${scrollRatio < 30 ? 1 - scrollRatio / 25 : 0}`,
        }}
      >
        가보지 않은 길 벌써부터
        <br />
        두려워 하고 계신가요?
      </h1>

      <h2
        className='fixed top-[30%] left-1/2 -translate-x-1/2 w-full text-center text-2xl text-white font-medium leading-10 sm:text-xl sm:leading-[1.5]'
        style={{
          opacity: `${scrollRatio <= 30 ? 0 : (scrollRatio - 30) / 25}`,
          top: scrollRatio <= 30 ? '32%' : '30%',
          transition: 'top 0.5s ease-in-out',
        }}
      >
        배는 정박해 있을 때 가장 안전하지만
        <br />
        그것은 배의 존재 이유가 아닙니다.
      </h2>

      <h2
        className='fixed top-[45%] left-1/2 -translate-x-1/2 w-full text-center text-2xl text-white font-medium leading-10 sm:hidden'
        style={{
          opacity: `${scrollRatio <= 40 ? 0 : (scrollRatio - 40) / 25}`,
          top: scrollRatio <= 40 ? '47%' : '45%',
          transition: 'top 0.5s ease-in-out',
        }}
      >
        우리는 개선보다 혁신의 길을 가는 사람들입니다.
        <br />
        문제 자체를 다시 정의하고 새로운 해답을 찾는 것에 집중합니다.
      </h2>
      {/* 모바일 */}
      <h2
        className='hidden fixed top-[45%] left-1/2 -translate-x-1/2 w-full text-center text-2xl text-white font-medium leading-10 sm:block sm:text-xl sm:leading-[1.5]'
        style={{
          opacity: `${scrollRatio <= 40 ? 0 : (scrollRatio - 40) / 25}`,
          top: scrollRatio <= 40 ? '47%' : '45%',
          transition: 'top 0.5s ease-in-out',
        }}
      >
        우리는 개선보다
        <br />
        혁신의 길을 가는 사람들입니다.
        <br />
        문제 자체를 다시 정의하고 새로운
        <br />
        해답을 찾는 것에 집중합니다.
      </h2>

      <h2
        className='fixed top-[60%] left-1/2 -translate-x-1/2 w-full text-center text-2xl text-white font-medium leading-10 sm:hidden'
        style={{
          opacity: `${scrollRatio <= 50 ? 0 : (scrollRatio - 50) / 25}`,
          top: scrollRatio <= 50 ? '62%' : '60%',
          transition: 'top 0.5s ease-in-out',
        }}
      >
        그라운드엑스와 함께 하는 사람들은,
        <br />
        본질만 남기고 익숙한 것을 새롭게, 가치있게 만들고 있습니다.
      </h2>
      {/* 모바일 */}
      <h2
        className='hidden fixed top-[60%] left-1/2 -translate-x-1/2 w-full text-center text-2xl text-white font-medium leading-10 sm:block sm:text-xl sm:leading-[1.5]'
        style={{
          opacity: `${scrollRatio <= 57 ? 0 : (scrollRatio - 57) / 25}`,
          top: scrollRatio <= 57 ? '69%' : '67%',
          transition: 'top 0.5s ease-in-out',
        }}
      >
        그라운드엑스와 함께 하는 사람들은,
        <br />
        본질만 남기고 익숙한 것을 새롭게,
        <br />
        가치있게 만들고 있습니다.
      </h2>
    </div>
  );
};

export default Section1;
