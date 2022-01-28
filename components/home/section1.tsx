import type { NextPage } from 'next';
import Image from 'next/image';

const Section1: NextPage = () => {
  return (
    <div className='relative w-screen h-screen'>
      {/* 전체 배경 이미지 */}
      <Image
        src='/home/section1/background.png'
        alt='Main Background Image'
        layout='fill'
        objectFit='cover'
        // priority
      />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
        {/* 메인 텍스트 이미지 */}
        <div className='relative w-[522px] h-[278.2px]'>
          <Image
            src='/home/section1/main-title.png'
            alt='Main Title'
            layout='fill'
            objectFit='cover'
          />
        </div>

        {/* 메인 텍스트 이미지 하단 텍스트 */}
        <div className='text-[24px] text-white font-medium mt-[44.4px]'>
          그라운드엑스가 NFT로 새로운 디지털 세상을 만들어갑니다.
        </div>
      </div>

      {/* 하단 화살표 아이콘 */}
      <div className='absolute bottom-[20px] left-1/2 -translate-x-1/2'>
        <div className='relative w-[48px] aspect-square animate-bounce'>
          <Image
            src='/tmp/2/section1/arrow.png'
            alt='Main Arrow Icon'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
