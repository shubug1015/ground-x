import type { NextPage } from 'next';
import Image from 'next/image';

const Section6: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[204px] pb-[160px]'>
        <div className='flex justify-between items-center bg-[#2a282b] w-full h-[148px] px-[60px]'>
          <div className='text-white text-[24px] font-medium'>
            더 나은 세상을 함께 만들어갈 인재를 찾습니다.
          </div>

          <div className='flex items-center space-x-[20px]'>
            <div className='text-white text-[18px] font-bold'>채용안내</div>
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
