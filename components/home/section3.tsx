import type { NextPage } from 'next';
import Image from 'next/image';

const Section3: NextPage = () => {
  return (
    <div className='relative w-screen h-[1200px] bg-[#212731] pt-[177px]'>
      {/* 상단 이미지 */}
      <div className='absolute top-0 left-0'>
        <div className='relative w-[45vw] aspect-[1/0.714]'>
          <Image
            src='/home/section3/1.png'
            alt='Section3 Icon'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      {/* 텍스트 섹션1 */}
      <div className='ml-[50%]'>
        <div className='font-bold text-[#38a8fa]'>MISSION</div>

        <h2 className='text-white text-[36px] font-medium leading-[1.4] mt-[12px]'>
          블록체인으로 만드는 더 나은 세상
        </h2>

        <div className='text-white text-[18px] leading-[1.56] mt-[20px]'>
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
      </div>

      {/* 텍스트 섹션2 */}
      <div className='ml-[calc(50vw-590px)] mt-[381px]'>
        <div className='font-bold text-[#38a8fa]'>VISION</div>

        <h2 className='text-white text-[36px] font-medium leading-[1.4] mt-[12px]'>
          디지털 자산 서비스의 글로벌 리더
        </h2>

        <div className='text-white text-[18px] leading-[1.56] mt-[20px]'>
          그라운드엑스는 블록체인으로 디지털 자산의 경계선을 지워 가고 신뢰할 수
          <br />
          있습니다. 세대와 문화의 구분 없이 누구나 받아들일 수 있는 가장
          안전하고
          <br />
          있는 디지털 자산 경험을 제공합니다.
        </div>
      </div>

      {/* 하단 이미지 */}
      <div className='absolute bottom-0 right-0'>
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
