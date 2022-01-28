import type { NextPage } from 'next';
import Image from 'next/image';

const Section2: NextPage = () => {
  return (
    <div className='flex-center-start w-screen'>
      <div className='w-full max-w-[1180px] sm:max-w-[330px]'>
        <h1 className='text-[#12161a] text-5xl font-bold leading-[1.5] sm:text-3xl sm:leading-[1.5]'>
          디지털 자산의
          <br />
          경계선을 지웁니다.
        </h1>

        <h2
          className='text-[#12161a] text-lg mt-7 sm:text-xs sm:leading-[1.5]'
          style={{ wordBreak: 'keep-all' }}
        >
          익숙한 것을 새롭게, 가치있게 만드려면, 혁신이 필요합니다.
          <br />
          그라운드엑스에서는 누구나 각자의 방식으로 혁신을 할 수 있습니다.
        </h2>

        <div className='flex-between-center space-x-10 mt-[6.25rem] mb-[13.75rem] sm:flex-col sm:space-x-0 sm:space-y-10 sm:mb-36 sm:mt-16'>
          <div className='relative h-[32.5rem] w-1/3 rounded-xl pt-[3.75rem] pl-8 overflow-hidden group sm:w-full sm:h-80'>
            <Image
              src='/tmp/section2-1.png'
              alt='Home Section2 Image1'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />

            <div className='absolute text-white'>
              <div className='text-2xl font-bold leading-[1.5]'>
                개인의 잠재력을 최대한
                <br />
                발휘 할 수 있습니다.
              </div>
              <div className='leading-[1.6] mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all sm:text-sm sm:leading-[1.5]'>
                꼭 필요한 일이 아니라면, 과감히 생략합니다.
                <br />
                해결해야 하는 가장 중요한 일에 집중하고,
                <br />
                가장 큰 혁신을 만들 수 있는 일을 먼저 합니다.
              </div>
            </div>
          </div>

          <div className='relative h-[32.5rem] w-1/3 rounded-xl pt-[3.75rem] pl-8 overflow-hidden group sm:w-full sm:h-80'>
            <Image
              src='/tmp/section2-2.png'
              alt='Home Section2 Image2'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />

            <div className='absolute text-[#4f5861]'>
              <div className='text-2xl font-bold leading-[1.5]'>
                관습을 파괴하고 새로운
                <br />
                접근 방식을 개발합니다.
              </div>
              <div className='leading-[1.6] mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all sm:text-sm sm:leading-[1.5]'>
                우리는 새로운 생태계를 만들어 나가는
                <br />
                사람입니다. “이게 옳은 걸까?”라는 질문은
                <br />
                우리가 올바른 방향으로 나아가고 있다는
                <br />
                것을 의미합니다.
              </div>
            </div>
          </div>

          <div className='relative h-[32.5rem] w-1/3 rounded-xl pt-[3.75rem] pl-8 overflow-hidden group sm:w-full sm:h-80'>
            <Image
              src='/tmp/section2-3.png'
              alt='Home Section3 Image3'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />

            <div className='absolute text-white'>
              <div className='text-2xl font-bold leading-[1.5]'>
                좋은 것을 넘어, 세상이 없던
                <br />
                혁신을 추구합니다.
              </div>
              <div className='leading-[1.6] mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all sm:text-sm sm:leading-[1.5]'>
                말을 이용해 이동범위가 넓어지고,
                <br />
                비행기를 이용해 세상과 연결되었습니다.
                <br />
                우리는 비행기를 뛰어넘는 세상을 만드는 <br />
                사람입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
