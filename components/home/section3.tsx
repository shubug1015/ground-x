import type { NextPage } from 'next';
import Image from 'next/image';

const Section3: NextPage = () => {
  return (
    <div className='relative w-screen h-[1200px] bg-[#212731] pt-[177px] lg:flex lg:flex-col lg:items-center lg:h-auto lg:pt-[280px] lg:pb-[140px] md:pt-[180px] md:pb-[120px]'>
      {/* 상단 이미지 */}
      <div className='absolute top-0 left-0'>
        <div className='relative w-[45vw] aspect-[1/0.714] md:w-[55vw]'>
          <Image
            src='/home/section3/1.png'
            alt='Section3 Icon'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      {/* 텍스트 섹션1 */}
      <div className='ml-[50%] lg:ml-0 lg:w-[632px] md:w-[327px]'>
        <div className='font-bold text-[#38a8fa] md:text-[14px]'>MISSION</div>

        <h2 className='text-white text-[36px] font-medium leading-[1.4] mt-[12px] lg:text-[32px] lg:mt-[8px] md:text-[28px] md:mt-[6px]'>
          블록체인으로 만드는 <br className='hidden md:block' />더 나은 세상
        </h2>

        {/* PC */}
        <div className='text-white text-[18px] leading-[1.56] mt-[20px] lg:hidden'>
          그라운드엑스가 꿈꾸는 더 나은 세상이란 디지털 소유권을 기반으로
          <br />
          누구나 크리에이터가 되는 세상입니다. 새로워진 고객 경험으로 디지털
          산업뿐만
          <br />
          아니라 모든 산업에서 보다 많은 기회가 제공될 것입니다.
          <br />
          이러한 세상을 만들기 위해 그라운드엑스는 가장 대중적이며 신뢰할 수
          <br />
          있는 블록체인 기술 기업이 되고자 합니다.
        </div>

        {/* Tablet */}
        <div className='hidden text-white text-[18px] leading-[1.56] mt-[20px] lg:block lg:text-[17.5px] md:hidden'>
          그라운드엑스가 꿈꾸는 더 나은 세상이란 디지털 소유권을 기반으로 누구나
          <br />
          크리에이터가 되는 세상입니다. 새로워진 고객 경험으로 디지털 산업뿐만
          아니라
          <br />
          모든 산업에서 보다 많은 기회가 제공될 것입니다. 이러한 세상을 만들기
          위해
          <br />
          그라운드엑스는 가장 대중적이며 신뢰할 수 있는 블록체인 기술 기업이
          되고자 합니다.
        </div>

        {/* Mobile */}
        <div className='hidden text-white leading-[1.6] mt-[20px] md:block'>
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

      {/* 텍스트 섹션2 */}
      <div className='ml-[calc(50vw-590px)] mt-[381px] lg:mt-[80px] lg:ml-0 lg:w-[632px] md:w-[327px]'>
        <div className='font-bold text-[#38a8fa] md:text-[14px]'>VISION</div>

        <h2 className='text-white text-[36px] font-medium leading-[1.4] mt-[12px] lg:text-[32px] lg:mt-[8px] md:text-[28px] md:mt-[6px]'>
          디지털 자산 서비스의 <br className='hidden md:block' />
          글로벌 리더
        </h2>

        <div className='text-white text-[18px] leading-[1.56] mt-[20px] lg:hidden'>
          그라운드엑스는 블록체인으로 디지털 자산의 경계선을 지워 가고 신뢰할 수
          <br />
          있습니다. 세대와 문화의 구분 없이 누구나 받아들일 수 있는 가장
          안전하고
          <br />
          신뢰할 수 있는 디지털 자산 경험을 제공합니다.
        </div>

        <div className='hidden text-white text-[17.5px] leading-[1.56] mt-[20px] lg:block md:hidden'>
          그라운드엑스는 블록체인으로 디지털 자산의 경계선을 지워 가고 신뢰할 수
          있습니다.
          <br />
          세대와 문화의 구분 없이 누구나 받아들일 수 있는 가장 안전하고 신뢰할
          수 있는
          <br />
          디지털 자산 경험을 제공합니다.
        </div>

        <div className='hidden text-white leading-[1.6] mt-[20px] md:block'>
          그라운드엑스는 블록체인으로 디지털 자산의 경계선을 지워 가고 신뢰할 수
          있습니다.
          <br />
          세대와 문화의 구분 없이 누구나 받아들일 수 있는 가장 안전하고 신뢰할
          수 있는
          <br />
          디지털 자산 경험을 제공합니다.
        </div>
      </div>

      {/* 하단 이미지 */}
      <div className='absolute bottom-0 right-0 lg:hidden'>
        <div className='relative w-[50vw] aspect-[1/0.67]'>
          <Image
            src='/home/section3/2.png'
            alt='Section3 Icon'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
