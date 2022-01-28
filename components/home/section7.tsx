import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Section7: NextPage = () => {
  return (
    <div className='flex justify-center bg-[#ebedf0]'>
      <div className='w-[1180px] h-[286px] md:pt-[100px] md:pb-[60px]'>
        <Link href='/recruit'>
          <a className='flex justify-between items-center w-full h-full px-[60px] md:flex-col md:justify-center md:h-[201px] md:px-0 group'>
            <div className='text-[#212731] text-[24px] font-medium md:w-[330px] md:text-[20px]'>
              더 나은 세상을 함께 만들어갈 <br className='hidden md:block' />
              인재를 찾습니다.
            </div>

            <div className='flex items-center space-x-[10px] md:mt-[40px] md:w-[330px]'>
              <div className='text-[#212731] text-[18px] font-bold md:text-[16px]'>
                채용안내
              </div>
              <div className='relative w-[22px] h-[16px] group-hover:translate-x-2 transition-all'>
                <Image
                  src='/home/section7/arrow-right-1.png'
                  alt='Right Arrow Icon'
                  layout='fill'
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Section7;
