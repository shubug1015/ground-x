import type { NextPage } from 'next';
import Image from 'next/image';

const Section2: NextPage = () => {
  return (
    <div className='relative mt-[500px] flex justify-center items-start w-screen h-[2840px] lg:h-[3000px] lg:bg-black md:h-[1235px] md:mt-[500px]'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full lg:-top-[300px] md:-top-[250px]'>
        <div className='relative w-full h-full'>
          <Image
            src='/home/section2/background.png'
            alt='Section2 Background Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      <div className='w-[1180px] z-[1] lg:w-[720px] md:w-[330px]'>
        {/* Title */}
        <h1 className='text-center text-[28px] font-medium leading-[1.6] mt-[200px] md:text-[15px] md:leading-[1.8] md:mt-[0px]'>
          블록체인으로 당신의 창의성에 가치를 더하고,
          <br />
          디지털과 아날로그의 경계를 넘나들며,
          <br />
          기술을 몰라도 아이디어를 마음껏 펼칠 수 있도록,
          <br />더 나은 세상을 만들어갑니다.
        </h1>

        {/* Section1 */}
        <div className='flex items-center w-full mt-[1021.4px] lg:flex-col lg:mt-[600px] md:mt-[276px]'>
          <div className='w-1/2 lg:w-full md:hidden'>
            <div className='relative w-[419px] h-[417px] lg:w-[480px] lg:h-[480px]'>
              <Image
                src='/home/section2/1.png'
                alt='Setion2 Image1'
                layout='fill'
              />
            </div>
          </div>

          <div className='w-1/2 text-white lg:w-full'>
            <div>
              <div className='font-bold lg:mt-[60px] md:text-[14px] md:mt-0'>
                MISSION
              </div>

              <h2 className='text-[36px] font-medium leading-[1.4] mt-[12px] md:text-[28px] md:mt-[7px]'>
                <span className='text-[#0f86dd]'>블록체인</span>으로 만드는
                <br />더 나은 세상
              </h2>

              <div className='text-[18px] leading-[1.67] mt-[40px] md:hidden'>
                그라운드엑스가 꿈꾸는 더 나은 세상이란 디지털 소유권을 기반으로
                <br />
                누구나 크리에이터가 되는 세상입니다. 새로워진 고객 경험으로
                디지털
                <br />
                산업뿐만 아니라 모든 산업에서 보다 많은 기회가 제공될 것입니다.
                <br />
                이러한 세상을 만들기 위해 그라운드엑스는 가장 대중적이며 신뢰할
                수
                <br />
                있는 블록체인 기술 기업이 되고자 합니다.
              </div>

              <div className='hidden text-[16px] leading-[1.6] mt-[18.6px] md:block'>
                그라운드엑스가 꿈꾸는 더 나은 세상이란 디지털
                <br />
                소유권을 기반으로 누구나 크리에이터가 되는
                <br />
                세상입니다. 새로워진 고객 경험으로 디지털
                <br />
                산업뿐만 아니라 모든 산업에서 보다 많은 기회가
                <br />
                제공될 것입니다. 이러한 세상을 만들기 위해
                <br />
                그라운드엑스는 가장 대중적이며 신뢰할 수 있는
                <br />
                블록체인 기술 기업이 되고자 합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Section2 */}
        <div className='flex items-center w-full mt-[346px] lg:flex-col-reverse lg:mt-[150px] md:mt-[68px]'>
          <div className='w-1/2 text-white lg:w-full lg:pl-[160px] md:pl-0'>
            <div>
              <div className='font-bold lg:mt-[60px] md:text-[14px]'>
                VISION
              </div>

              <h2 className='text-[36px] font-medium leading-[1.4] mt-[12px] md:text-[28px] md:mt-[7px]'>
                블록체인 킬러 서비스로써
                <br />
                <span className='text-[#0f86dd]'>
                  디지털 자산 서비스
                </span>의 <br className='hidden md:block' />
                글로벌 리더
              </h2>

              <div className='text-[18px] leading-[1.67] mt-[40px] md:hidden'>
                그라운드엑스는 블록체인으로 디지털 자산의 경계선을 지워 가고
                <br />
                있습니다. 세대와 문화의 구분 없이 누구나 받아들일 수 있는 가장
                안전하고
                <br />
                신뢰할 수 있는 디지털 자산 경험을 제공합니다.
              </div>

              <div className='hidden text-[16px] leading-[1.6] mt-[18.6px] md:block'>
                그라운드엑스는 블록체인으로 디지털 자산의
                <br />
                경계선을 지워 가고 있습니다. 세대와 문화의
                <br />
                구분 없이 누구나 받아들일 수 있는 가장 안전하고
                <br />
                신뢰할 수 있는 디지털 자산 경험을 제공합니다.
              </div>
            </div>
          </div>

          <div className='flex justify-end w-1/2 lg:w-full md:hidden'>
            <div className='relative w-[403.8px] h-[400px] lg:w-[480px] lg:h-[480px]'>
              <Image
                src='/home/section2/2.png'
                alt='Setion2 Image1'
                layout='fill'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
