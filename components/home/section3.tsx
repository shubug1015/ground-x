import type { NextPage } from 'next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Section3: NextPage = () => {
  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div
        className={
          className +
          ' absolute z-[1] !left-[calc((100vw-1180px)/2+590px)] !top-[588px] before:!hidden lg:!left-[calc(50%-275px)] lg:!-translate-x-1/2 lg:!top-[1050px] md:!translate-x-0 md:!left-[calc((100vw-330px)/2)] md:!top-[782px]'
        }
        onClick={onClick}
      >
        <div className='relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]'>
          <Image
            src='/home/section3/arrow-left.png'
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
            ' absolute z-[1] !left-[calc((100vw-1180px)/2+590px+60px)] !top-[588px] before:!hidden lg:!left-[calc(50%-215px)] lg:!-translate-x-1/2 lg:!top-[1050px] md:!translate-x-0 md:!left-[calc((100vw-330px)/2+64px)] md:!top-[782px]'
          }
          onClick={onClick}
        >
          <div className='relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]'>
            <Image
              src='/home/section3/arrow-right.png'
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

  return (
    <div className='bg-[#f0f4fa] h-[660px] lg:h-[1150px] md:h-[882px]'>
      <Slider
        {...settings}
        className='relative !flex !items-center w-full h-full lg:!items-start'
      >
        {[1, 2].map((i, index) => (
          <div key={index} className='!flex justify-center items-center'>
            <div className='!w-[1180px] lg:!w-[720px] md:!w-full'>
              <div key={index} className='flex items-center w-full lg:flex-col'>
                {/* Image */}
                <div className='w-1/2 lg:flex lg:justify-center lg:w-full lg:pt-[50px] md:pt-0 md:bg-gradient-[section3-gradient]'>
                  <div className='relative w-[533px] h-[660px] lg:w-[480px] lg:h-[594px] md:w-full md:h-[384px]'>
                    <Image
                      src='/home/section3/1.png'
                      alt='Setion3 Image1'
                      layout='fill'
                      objectFit='cover'
                      className='md:!hidden'
                    />
                    <Image
                      src='/home/section3/1-md.png'
                      alt='Setion3 Image1'
                      layout='fill'
                      objectFit='cover'
                      className='!hidden md:!block'
                    />
                  </div>
                </div>

                {/* Text */}
                <div className='w-1/2 lg:w-full lg:flex lg:justify-center lg:mt-[40px] md:w-[330px]'>
                  <div>
                    <h1 className='text-[24px] font-medium leading-[1.6] md:text-[20px]'>
                      그라운드엑스는 성장 의지가 강한 크루들이 모여있습니다.
                    </h1>

                    <div className='text-[18px] text-[#292e33] leading-[1.67] mt-[20px] md:hidden'>
                      그라운드엑스는 성장 의지가 강한 크루들이 모여있습니다.
                      <br />
                      또한 다양한 산업군에서 전문성을 갖고 합류한 구성원들이
                      있는 곳이기도
                      <br />
                      합니다. 이런 배경에서 우리는 서로를 신뢰하고 존중합니다.
                      카카오 공동체 및
                      <br />
                      블록체인 DAO 기반의 문화가 잘 융합된
                      &apos;그라운드엑스&apos;스러움이 있습니다.
                      <br />
                      크루 개개인이 업무와 의견의 주체가 되어 본질에 대한 고민을
                      하면서 회사와
                      <br />
                      본인의 성장을 잘 연동 시킬 수 있는 곳이라고 생각합니다.
                    </div>

                    <div className='hidden text-[15.7px] text-[#292e33] leading-[1.6] mt-[20px] md:block'>
                      그라운드엑스는 성장 의지가 강한 크루들이
                      <br />
                      모여있습니다. 또한 다양한 산업군에서 전문성을
                      <br />
                      갖고 합류한 구성원들이 있는 곳이기도 합니다.
                      <br />
                      이런 배경에서 우리는 서로를 신뢰하고 존중합니다.
                      <br />
                      카카오 공동체 및 블록체인 DAO 기반의 문화가
                      <br />잘 융합된 &apos;그라운드엑스&apos;스러움이 있습니다.
                      <br />
                      크루 개개인이 업무와 의견의 주체가 되어 본질에
                      <br />
                      고민을 하면서 회사와 본인의 성장을
                      <br />잘 연동 시킬 수 있는 곳이라고 생각합니다.
                    </div>

                    <div className='text-[18px] text-[#292e33] font-medium mt-[60px] md:hidden'>
                      Kevin, Klip Drops Biz
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
