import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Section7: NextPage = () => {
  return (
    <div className='flex justify-center bg-[#ebedf0]'>
      <div className='w-[1180px] h-[286px] lg:h-auto lg:py-[80px] md:h-auto md:py-[40px]'>
        <Link href='/recruit'>
          <a className='flex justify-between items-center w-full h-full px-[60px] lg:flex-col lg:justify-center lg:items-center lg:px-0 md:px-0 group'>
            <div className='text-[#212731] text-[24px] font-medium lg:w-[632px] lg:text-[32px] md:w-[327px] md:text-[20px]'>
              더 나은 세상을 함께 만들어갈 <br className='hidden lg:block' />
              인재를 찾습니다.
            </div>

            <div className='flex items-center space-x-[10px] lg:w-[632px] lg:mt-[60px] md:mt-[40px] md:w-[327px]'>
              <div className='text-[#212731] text-[18px] font-bold lg:text-[24px] md:text-[16px]'>
                채용안내
              </div>
              <div className='relative w-[22px] h-[16px] group-hover:translate-x-2 transition-all md:w-[16.5px] md:h-[12px]'>
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
