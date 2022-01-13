import type { NextPage } from 'next';
import Image from 'next/image';

const Section7: NextPage = () => {
  return (
    <div className='relative flex-center-start w-screen h-[60rem] sm:h-[35rem]'>
      <Image
        src='/home/section7-1.png'
        alt='Home Section7 Image1'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-10 w-full max-w-[1180px] sm:max-w-[330px] sm:top-0'>
        <h1 className='text-[#12161a] text-4xl font-bold leading-[1.5] sm:text-3xl sm:leading-[1.5]'>
          지금도 디지털 자산의 <br className='hidden sm:block' />
          경계선을 <br className='sm:hidden' />
          지우고 <br className='hidden sm:block' />
          있습니다.
        </h1>
        <div className='text-[#292e33] text[1.375rem] leading-[1.6] mt-7 mb-20'>
          그라운드엑스가 지워가는 수많은 경계선들,
          <br />
          당신과 함께라면
          <br />
          더욱 빠르게 혁신할 수 있습니다.
          <br />
          지금, 그라운드엑스에 합류 하세요.
        </div>
        <div className='flex-center-center w-60 h-16 bg-[#0163cf] text-white font-medium rounded-md cursor-pointer hover:opacity-90 transition-all'>
          채용 중인 공고 보기
        </div>
      </div>
    </div>
  );
};

export default Section7;
