import type { NextPage } from 'next';
import Image from 'next/image';

const Section4: NextPage = () => {
  return (
    <div className='flex-center-start w-screen'>
      <div className='w-full max-w-[1180px]'>
        <h1 className='text-[#12161a] text-4xl font-medium leading-[1.5] mt-[11.25rem]'>
          탁월한 동료가 최고의복지 입니다.
          <br />
          하나의 점이 연결되어 선이 되듯,
          <br />
          탁월한 동료들이 곁에 있습니다.
        </h1>

        <div className='flex flex-col items-end w-full mt-[7.5rem] mb-[13.75rem]'>
          <div className='relative w-[60.25rem] h-[35rem]'>
            <Image
              src='/home/section4-1.png'
              alt='Home Section4 Image1'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />
          </div>

          <div className='w-[60.25rem]'>
            <h2 className='text-[1.75rem] text-[#12161a] mt-[3.75rem] mb-5'>
              나보다 동료의 생각이 더 옳다는 믿음을 가집니다.
            </h2>
            <div className='text-xl text-[#292e33]'>
              “내가 항상 정답일까?” 개인의 완벽함에 기대기 보다 동료와 함께
              완성해나갑니다.
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start w-fullmt-[7.5rem] mb-[13.75rem]'>
          <div className='relative w-[36.25rem] h-[25rem]'>
            <Image
              src='/home/section4-2.png'
              alt='Home Section4 Image2'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />
          </div>

          <div className='w-[60.25rem]'>
            <h2 className='text-[1.75rem] text-[#12161a] mt-[3.75rem] mb-5'>
              우리의 무대는 세계입니다.
            </h2>
            <div className='text-xl text-[#292e33]'>
              다양성에 열려 있는 글로벌 블럭체인계의 선두로 끊임 없이
              <br />
              불편함을 제거해 나가기 위한 사람들입니다.
            </div>
          </div>
        </div>

        <div className='flex flex-col items-end w-full -mt-[42rem] mb-[13.75rem]'>
          <div className='relative w-[30rem] h-[37rem]'>
            <Image
              src='/home/section4-3.png'
              alt='Home Section4 Image3'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />
          </div>

          <div className='w-[30rem]'>
            <h2 className='text-[1.75rem] text-[#12161a] mt-[3.75rem] mb-5'>
              무슨 일이든, 본질에 집중합니다.
            </h2>
            <div className='text-xl text-[#292e33]'>
              “원래 그거 당연한거 아냐?”
              <br />
              불편하고 복잡한 것은 당연한게 아닙니다.
              <br />
              우리는 본질에서 출발합니다.
              <br />
              끊임없는 “왜?”라는 물음으로 익숙한 것을 새롭게,
              <br />
              가치 있게 만듭니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
