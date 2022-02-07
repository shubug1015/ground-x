import type { NextPage } from 'next';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section2: NextPage = () => {
  const list = [
    {
      id: 0,
      imgUrl: '/home/section2/1.png',
      text: '블록체인으로\n당신의 창의성에\n가치를 더하고',
    },
    {
      id: 1,
      imgUrl: '/home/section2/2.png',
      text: '디지털과 아날로그의\n경계를 넘나들며',
    },
    {
      id: 2,
      imgUrl: '/home/section2/3.png',
      text: '기술을 몰라도\n아이디어를\n마음껏 펼칠 수 있도록',
    },
    {
      id: 3,
      imgUrl: '/home/section2/4.png',
      text: '더 나은 세상으로\n물들여 갑니다.',
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className='relative flex w-screen h-screen lg:flex-col lg:h-auto'>
      {list.map((l) => (
        <div
          key={l.id}
          className='relative w-1/4 h-full flex justify-center items-center bg-[#0000004d] lg:w-full lg:h-[360px] md:h-[220px] group'
        >
          <Image
            src={l.imgUrl}
            alt='Section2 Image'
            layout='fill'
            objectFit='cover'
            className='group-hover:scale-110 transition-transform duration-300'
          />

          {/* PC, Tabelt */}
          <div
            data-aos='fade-up'
            data-aos-delay={
              l.id === 0
                ? '0'
                : l.id === 1
                ? '400'
                : l.id === 2
                ? '800'
                : '1200'
            }
            data-aos-offset='0'
            data-aos-duration='1000'
            className='text-center text-[32px] text-white font-medium whitespace-pre-wrap md:hidden'
          >
            {l.text}
          </div>

          {/* Mobile */}
          <div
            data-aos='fade-up'
            data-aos-delay={
              l.id === 0 ? '0' : l.id === 1 ? '200' : l.id === 2 ? '400' : '600'
            }
            data-aos-duration='700'
            className='hidden text-center text-[32px] text-white font-medium whitespace-pre-wrap md:block md:text-[20px] z-[10]'
          >
            {l.text}
          </div>

          {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0000004d] flex justify-center items-center ' /> */}
        </div>
      ))}
    </div>
  );
};

export default Section2;
