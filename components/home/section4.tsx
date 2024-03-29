import type { NextPage } from 'next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section3: NextPage = () => {
  const list = [
    {
      id: 0,
      profileImgUrl: '/home/section4/2-3.png',
      title: (
        <>
          “블록체인 대중화의 미래를 앞당기고
          <br />
          싶은 분이라면, 지금 합류하세요.”
        </>
      ),
      content: (
        <>
          {/* PC */}
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='text-[18px] text-[#333333] leading-[1.67] mt-[20px] lg:hidden md:text-[16px]'
          >
            그라운드엑스에서 꼭 이뤄내고 싶은 일은 블록체인의 대중화입니다.
            복잡하고
            <br />
            어려운 기술에 대한 이해 없이도, 자연스레 우리 생활에 스며들어 어느새
            <br />
            블록체인을 만들고 싶고, 클레이튼이 그런 블록체인이 될 거라고 믿고
            있습니다.
            <br />
            블록체인으로 무언가를 이뤄내고 싶은 분이라면, 국내에서
            그라운드엑스만큼
            <br />
            탄탄하게 기반을 다져 나가고 있는 회사는 찾기 힘드실 겁니다. 언젠가는
            다가올
            <br />
            블록체인 대중화의 미래를 앞당기고 싶은 분이라면, 지금 합류하세요.
          </div>

          {/* Tablet */}
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='hidden text-[17.5px] text-[#333333] leading-[1.67] mt-[20px] lg:block md:hidden'
          >
            그라운드엑스에서 꼭 이뤄내고 싶은 일은 블록체인의 대중화입니다.
            복잡하고
            <br />
            어려운 기술에 대한 이해 없이도, 자연스레 우리 생활에 스며들어 어느새
            <br />
            블록체인을 만들고 싶고, 클레이튼이 그런 블록체인이 될 거라고 믿고
            있습니다.
            <br />
            블록체인으로 무언가를 이뤄내고 싶은 분이라면, 국내에서
            그라운드엑스만큼
            <br />
            탄탄하게 기반을 다져 나가고 있는 회사는 찾기 힘드실 겁니다. 언젠가는
            다가올
            <br />
            블록체인 대중화의 미래를 앞당기고 싶은 분이라면, 지금 합류하세요.
          </div>

          {/* Mobile */}
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='hidden text-[16px] text-[#333333] leading-[1.67] mt-[20px] md:block'
          >
            그라운드엑스에서 꼭 이뤄내고 싶은 일은
            <br />
            블록체인의 대중화입니다. 복잡하고 어려운
            <br />
            기술에 대한 이해 없이도, 자연스레 우리 생활에
            <br />
            스며들어 어느새 블록체인을 만들고 싶고,
            <br />
            클레이튼이 그런 블록체인이 될 거라고
            <br />
            믿고 있습니다. 블록체인으로 무언가를 이뤄내고
            <br />
            싶은 분이라면, 국내에서 그라운드엑스만큼
            <br />
            탄탄하게 기반을 다져 나가고 있는 회사는 찾기
            <br />
            힘드실 겁니다. 언젠가는 다가올 블록체인
            <br />
            대중화의 미래를 앞당기고 싶은 분이라면,
            <br />
            지금 합류하세요.
          </div>
        </>
      ),
      signImgUrl: '/home/section4/sign-1-1.png',
      team: 'Nick, Product Team',
    },
    {
      id: 1,
      profileImgUrl: '/home/section4/1.png',
      title: (
        <>
          “그라운드엑스는 성장 의지가 강한 <br className='lg:hidden md:block' />
          크루들이 <br className='hidden lg:block md:hidden' />
          모여있습니다.”
        </>
      ),
      content: (
        <>
          {/* PC */}
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='text-[18px] text-[#333333] leading-[1.67] mt-[20px] lg:hidden md:text-[16px]'
          >
            그라운드엑스는 성장 의지가 강한 크루들이 모여있습니다. 또한 다양한
            산업군
            <br />
            에서 전문성을 갖고 합류한 구성원들이 있는 곳이기도 합니다. 이런
            배경에서
            <br />
            우리는 서로를 신뢰하고 존중합니다. 카카오 공동체 및 블록체인 DAO
            기반의
            <br />
            문화가 잘 융합된 &apos;그라운드엑스&apos;스러움이 있습니다. 크루
            개개인이 업무와
            <br />
            의견의 주체가 되어 본질에 대한 고민을 하면서 회사와 본인의 성장을 잘
            연동
            <br />
            시킬 수 있는 곳이라고 생각합니다.
          </div>

          {/* Tablet */}
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='hidden text-[17.5px] text-[#333333] leading-[1.67] mt-[20px] lg:block md:hidden'
          >
            그라운드엑스는 성장 의지가 강한 크루들이 모여있습니다. 또한 다양한
            산업군에서
            <br />
            전문성을 갖고 합류한 구성원들이 있는 곳이기도 합니다. 이런 배경에서
            우리는 서로를
            <br />
            신뢰하고 존중합니다. 카카오 공동체 및 블록체인 DAO 기반의 문화가 잘
            융합된
            <br />
            &apos;그라운드엑스&apos;스러움이 있습니다. 크루 개개인이 업무와
            의견의 주체가 되어 본질에
            <br />
            대한 고민을 하면서 회사와 본인의 성장을 잘 연동 시킬 수 있는
            곳이라고 생각합니다.
          </div>

          {/* Mobile */}
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='hidden text-[16px] text-[#333333] leading-[1.67] mt-[20px] md:block'
          >
            그라운드엑스는 성장 의지가 강한 크루들이 모여
            <br />
            있습니다. 또한 다양한 산업군에서 전문성을 갖고
            <br />
            합류한 구성원들이 있는 곳이기도 합니다. 이런
            <br />
            배경에서 우리는 서로를 신뢰하고 존중합니다.
            <br />
            카카오 공동체 및 블록체인 DAO 기반의 문화가 잘
            <br />
            융합된 &apos;그라운드엑스&apos;스러움이 있습니다. 크루
            <br />
            개개인이 업무와 의견의 주체가 되어 본질에 대한
            <br />
            고민을 하면서 회사와 본인의 성장을 잘 연동 시킬
            <br />수 있는 곳이라고 생각합니다.
          </div>
        </>
      ),
      signImgUrl: '/home/section4/sign-2-2.png',
      team: 'Kevin, Klip Drops Biz',
    },
  ];

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div
        className={
          className +
          ' absolute z-[1] !left-auto !right-[calc((100vw-1180px)/2+60px)] !top-[530px] before:!hidden lg:right-auto lg:!left-[calc(50vw-316px)] lg:!top-[875px] md:!translate-x-0 md:!left-[calc((100vw-327px)/2)] md:!top-[931px]'
        }
        onClick={onClick}
      >
        <div className='relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]'>
          <Image
            src='/home/section4/arrow-left-1.png'
            alt='Setion3 Left Arrow Icon'
            layout='fill'
          />
        </div>
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <>
        <div
          className={
            className +
            ' absolute z-[1] !right-[calc((100vw-1180px)/2)] !top-[530px] before:!hidden lg:!left-[calc(50vw-316px+56px)] lg:!top-[875px] md:!translate-x-0 md:!left-[calc((100vw-327px)/2+56px)] md:!top-[931px]'
          }
          onClick={onClick}
        >
          <div className='relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]'>
            <Image
              src='/home/section4/arrow-right-1.png'
              alt='Setion3 Right Arrow Icon'
              layout='fill'
            />
          </div>
        </div>
      </>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className='bg-[#f0f4fa] h-[660px] lg:h-[975px] md:h-[1031px]'>
      <Slider
        {...settings}
        className='relative !flex !items-center w-full h-full lg:!items-start'
      >
        {list.map((l) => (
          <div
            key={l.id}
            className='!flex justify-center items-center !w-screen'
          >
            <div className='!w-[1180px] lg:!w-[632px] md:!w-[327px]'>
              <div className='flex items-center w-full lg:flex-col'>
                {/* Image */}
                <div className='flex items-end w-1/2 h-[660px] lg:flex lg:justify-center lg:w-full lg:h-auto md:pt-0 '>
                  <div className='relative w-[445px] h-[660px] lg:w-[302.25px] lg:h-[429px] md:w-[282.52px] md:h-[401px]'>
                    <Image
                      src={l.profileImgUrl}
                      alt='Profile Image'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>

                {/* Text */}
                <div className='w-1/2 lg:w-full lg:flex lg:justify-start lg:mt-[40px] md:w-[327px]'>
                  <div>
                    <h1
                      data-aos='fade-left'
                      data-aos-duration='1000'
                      className='text-[32px] leading-[1.4] md:text-[22px] lg:tracking-tight'
                    >
                      {l.title}
                    </h1>

                    {l.content}

                    <div className='relative w-[69px] h-[37px] mt-[100px] lg:mt-[40px]'>
                      <Image
                        src={l.signImgUrl}
                        alt='Sign Image'
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>

                    <div className='text-[14px] text-[#999999] font-medium mt-[6px]'>
                      {l.team}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section3;
