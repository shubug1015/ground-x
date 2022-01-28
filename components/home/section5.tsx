import type { NextPage } from 'next';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section4: NextPage = () => {
  const list = [
    {
      id: 0,
      imgUrl: '/home/section5/1.png',
      subtitle: 'Premium Art & Collectibles',
      title: 'Klip Drops',
      hoverText:
        '디지털 아트 큐레이션 갤러리,\nKlip Drops는 다양한 디지털 아트를\n누구나 손쉽게 일상에서 접하고 소유할\n수 있도록 유통하는 서비스입니다.',
      hoverBtn: 'Klip Drops 페이지',
      url: 'https://klipdrops.com',
    },
    {
      id: 1,
      imgUrl: '/home/section5/2.png',
      subtitle: 'Simple & Secure Wallet',
      title: 'Klip',
      hoverText:
        '내 손안의 디지털 지갑,\nKlip은 나의 디지털 자산을 안전하게 한 곳\n에 보관하고 친구에게 간편하게 전송할 수\n있는 서비스입니다.',
      hoverBtn: 'Klip 지갑 소개 페이지',
      url: 'https://klipwallet.com',
    },
    {
      id: 2,
      imgUrl: '/home/section5/3.png',
      subtitle: 'Optimal Choices for your NFT Services',
      title: 'KAS',
      hoverText:
        'Klaytn API Service,\nKAS는 블록체인 서비스를 더 쉽고 빠르게\n만들 수 있도록 블록체인 애플리케이션\n개발팀의 성공을 지원하는 서비스입니다.',
      hoverBtn: 'KAS 소개 페이지',
      url: 'https://www.klaytnapi.com',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] py-[120px] lg:w-[632px] lg:py-[80px] md:w-[327px] md:py-[60px]'>
        {/* Title */}
        <h1 className='font-medium text-[36px] md:text-left md:text-[28px] md:leading-[1.4]'>
          그라운드엑스가 <br />
          만드는 서비스
        </h1>

        <div className='flex justify-between mt-[40px] lg:w-full lg:flex-col lg:space-y-[60px] lg:items-center md:mt-[28px] md:space-y-[40px]'>
          {list.map((l) => (
            <div
              key={l.id}
              data-aos='fade-up'
              data-aos-duration='1500'
              data-aos-delay={l.id === 0 ? '0' : l.id === 1 ? '300' : '600'}
            >
              <div className='relative w-[380px] h-[280px] transition-all duration-300 group lg:w-[632px] lg:h-[433px] md:w-[327px] md:h-[224px]'>
                <Image
                  src={l.imgUrl}
                  alt='Setion5 Box Icon'
                  layout='fill'
                  objectFit='cover'
                  className='group-hover:opacity-0 transition-all duration-300'
                />

                <div className='flex flex-col justify-center w-full h-full px-[48px] bg-[#052E4D] opacity-0 group-hover:opacity-100 transition-all duration-300 md:px-[24px]'>
                  <div className='text-white leading-[1.6] translate-y-5 group-hover:translate-y-0 transition-all duration-300 whitespace-pre-wrap lg:text-[20px] md:text-[14px]'>
                    {l.hoverText}
                  </div>
                  <div
                    onClick={() => window.open(l.url)}
                    className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[40px] z-[1] cursor-pointer translate-y-5 group-hover:translate-y-0 transition-all duration-300 lg:mt-[80px] lg:h-[60px] md:mt-[30px] md:h-[50px]'
                  >
                    <div className='text-white text-[14px] lg:text-[18px] md:text-[14px]'>
                      {l.hoverBtn}
                    </div>
                    <div className='relative w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'>
                      <Image
                        src='/tmp/2/section4/arrow-right.png'
                        alt='Right Arrow Icon'
                        layout='fill'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-[18px] font-medium text-[#999999] mt-[20px] lg:mt-[18px] md:text-[14px] md:mt-[12px]'>
                {l.subtitle}
              </div>
              <div className='text-[24px] font-bold mt-[4px] md:mt-0'>
                {l.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
