import type { NextPage } from 'next';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section3: NextPage = () => {
  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div
        className={
          className +
          ' absolute z-[1] !left-[calc((100vw-1180px)/2)] !top-[23rem] w-6 h-6 !text-xl !text-[#4f5861] before:hidden sm:!left-[calc((100vw-330px)/2)] sm:!top-[20rem]'
        }
        onClick={onClick}
      >
        <BsArrowLeftCircle />
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
            ' absolute z-[1] !left-[calc((100vw-1180px)/2+70px)] !top-[23rem] w-6 h-6 !text-xl !text-[#4f5861] before:hidden sm:!left-[calc((100vw-330px)/2+50px)] sm:!top-[20rem]'
          }
          onClick={onClick}
        >
          <BsArrowRightCircle />
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
    <div>
      <Slider {...settings} className='relative w-full h-full'>
        {[1, 2].map((i, index) => (
          <div
            key={index}
            className='!flex justify-center items-center w-screen h-[28.75rem] bg-[#f0f2f5] sm:h-96'
          >
            <div className='w-full max-w-[1180px] text-[#4f5861] sm:max-w-[330px]'>
              <h1 className='text-2xl font-bold'>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur.
              </h1>
              <div className='mt-3'>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Aliquam erat volutpat.
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section3;
