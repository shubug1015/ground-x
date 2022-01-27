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
          ' absolute z-[1] !left-[calc((100vw-1180px)/2+590px)] !top-[588px] before:!hidden sm:!left-[calc((100vw-330px)/2)] sm:!top-[20rem]'
        }
        onClick={onClick}
      >
        <div className='relative w-[32px] h-[32px]'>
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
            ' absolute z-[1] !left-[calc((100vw-1180px)/2+590px+60px)] !top-[588px] before:!hidden sm:!left-[calc((100vw-330px)/2+50px)] sm:!top-[20rem]'
          }
          onClick={onClick}
        >
          <div className='relative w-[32px] h-[32px]'>
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
    <div className='bg-[#f0f4fa] h-[660px]'>
      <Slider
        {...settings}
        className='relative !flex !items-center w-full h-full'
      >
        {[1, 2].map((i, index) => (
          <div key={index} className='!flex justify-center items-center'>
            <div className='!w-[1180px]'>
              <div key={index} className='flex items-center w-full'>
                <div className='w-1/2'>
                  <div className='relative w-[533px] h-[660px]'>
                    <Image
                      src='/home/section3/1.png'
                      alt='Setion3 Image1'
                      layout='fill'
                    />
                  </div>
                </div>

                <div className='w-1/2'>
                  <div>
                    <h1 className='text-[24px] font-medium leading-[1.6]'>
                      그라운드엑스는 성장 의지가 강한 크루들이 모여있습니다.
                    </h1>

                    <div className='text-[18px] text-[#292e33] leading-[1.67] mt-[20px]'>
                      그라운드엑스는 성장 의지가 강한 크루들이 모여있습니다.
                      <br />
                      또한 다양한 산업군에서 전문성을 갖고 합류한 구성원들이
                      있는 곳이기도
                      <br />
                      합니다. 이런 배경에서 우리는 서로를 신뢰하고 존중합니다.
                      카카오 공동체 및
                      <br />
                      블록체인의 DAO 기반의 문화가 잘 융합된
                      &apos;그라운드엑스&apos;스러움이 있습니다.
                      <br />
                      크루 개개인이 업무와 의견의 주체가 본질에 고민을 하게
                      되면서 회사와
                      <br />
                      본인의 성장을 잘 연동 시킬 수 있는 곳이라고 생각합니다.
                    </div>

                    <div className='text-[18px] text-[#292e33] font-medium mt-[60px]'>
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
