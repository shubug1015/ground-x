import type { NextPage } from 'next';
import Image from 'next/image';

const Section6: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[204px] pb-[160px] md:pt-[100px] md:pb-[60px]'>
        <div className='flex justify-between items-center bg-[#2a282b] w-full h-[148px] px-[60px] md:flex-col md:justify-center md:h-[201px] md:px-0'>
          <div className='text-white text-[24px] font-medium md:w-[330px] md:text-[20px]'>
            더 나은 세상을 함께 만들어갈 <br className='hidden md:block' />
            인재를 찾습니다.
          </div>

          <div className='flex items-center space-x-[10px] md:mt-[40px] md:w-[330px]'>
            <div className='text-white text-[18px] font-bold md:text-[16px]'>
              채용안내
            </div>
            <div className='relative w-[18px] h-[18px]'>
              <Image
                src='/home/section6/arrow-right.png'
                alt='Right Arrow Icon'
                layout='fill'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
