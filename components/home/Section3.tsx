import type { NextPage } from 'next';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
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
          ' absolute z-[1] !left-[calc((100vw-1180px)/2+590px)] !top-[574px] before:!hidden sm:!left-[calc((100vw-330px)/2)] sm:!top-[20rem]'
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
            ' absolute z-[1] !left-[calc((100vw-1180px)/2+590px+60px)] !top-[574px] before:!hidden sm:!left-[calc((100vw-330px)/2+50px)] sm:!top-[20rem]'
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
    <div className='bg-[#f1f1f1] h-[740px]'>
      <Slider
        {...settings}
        className='relative !flex !items-center w-full h-full'
      >
        {[1, 2].map((i, index) => (
          <div key={index} className='!flex justify-center items-center'>
            <div className='!w-[1180px]'>
              <div key={index} className='flex items-center w-full'>
                <div className='w-1/2'>
                  <div className='relative w-[480px] h-[673px]'>
                    <Image
                      src='/home/section3/2.png'
                      alt='Setion3 Image1'
                      layout='fill'
                    />
                  </div>
                </div>

                <div className='w-1/2'>
                  <div>
                    <h1 className='text-[24px] font-medium leading-[1.6]'>
                      그라운드X는 성장하고자 하는 의지가 높은
                      <br />
                      크루들의 집합입니다.
                    </h1>
                    <div className='text-[18px] leading-[1.67] mt-[18px]'>
                      또한 다양한 산업군에서 전문성을 갖고 합류한 구성원들이
                      있는
                      <br />
                      곳이기도 하고요, 이런 배경에서 우리는 서로를 신뢰하고
                      존중합니다.
                      <br />
                      카카오 공동체 및 블록체인의 DAO 기반의 문화가 잘 융합된
                      <br />
                      그라운드X 스러움이 있습니다. 크루 각각이 이런 과정 속에
                      업무와
                      <br />
                      의견의 주체가 본질에 고민을 하게 되면서 회사의 성장과
                      본인의 성장을
                      <br />잘 연동 시킬 수 있는 곳이라고 생각합니다.
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
