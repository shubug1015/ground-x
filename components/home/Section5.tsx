import type { NextPage } from 'next';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const Section5: NextPage = () => {
  return (
    <>
      <div className='relative w-full h-[28.75rem] sm:h-52'>
        <Image
          src='/home/section5-1.png'
          alt='Home Section5 Image1'
          layout='fill'
          objectFit='cover'
          className='!px-[6.25rem] sm:!px-2'
        />
      </div>
      <div className='flex-center-start w-screen'>
        <div className='w-full max-w-[1180px] sm:max-w-[330px]'>
          <h1 className='text-[#12161a] text-4xl font-medium leading-[1.5] mt-[11.25rem] sm:text-2xl sm:leading-[1.5] sm:mt-24'>
            우리는 이렇게 <br className='hidden sm:block' />
            경계선을 지웁니다.
            <br />
            여정에 합류할 <br className='hidden sm:block' />
            동료를 찾고 있습니다.
          </h1>

          <div className='flex-between-center space-x-10 mt-[6.25rem] mb-[13.75rem] sm:mt-16 sm:flex-col sm:space-x-0 sm:space-y-10 sm:mb-16'>
            <div className='w-1/3 cursor-pointer group sm:w-full'>
              <div className='relative w-[98%] aspect-square rounded-xl overflow-hidden group-hover:w-full transition-all '>
                <Image
                  src='/home/section5-2.png'
                  alt='Home Section5 Image2'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div>
                <div className='text-xl text-[#12161a] font-bold mt-5 group-hover:text-[#0163CF] transition-all'>
                  Klip Drops
                </div>
                <div className='text-[#3d454d] leading-[1.5] mt-3'>
                  다양한 디지털 아트를 누구나 손쉽게
                  <br />
                  일상에서 접하고 소유할 수 있도록 합니다.
                  <br />
                  디지털 아트 큐레이션 갤러리로 한정판 디지털
                  <br />
                  아트를 유통하는 서비스입니다.
                </div>
                <BsArrowRight className='mt-10 text-2xl group-hover:text-[#0163CF] transition-all' />
              </div>
            </div>

            <div className='w-1/3 cursor-pointer group sm:w-full'>
              <div className='relative w-[99%] aspect-square rounded-xl overflow-hidden group-hover:w-full transition-all '>
                <Image
                  src='/home/section5-3.png'
                  alt='Home Section5 Image3'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div>
                <div className='text-xl text-[#12161a] font-bold mt-5 group-hover:text-[#0163CF] transition-all'>
                  Klip Wallet
                </div>
                <div className='text-[#3d454d] leading-[1.5] mt-3'>
                  내 손안의 디지털 지갑, Klip은 나의 디지털 자산을
                  <br />
                  안전하게 한 곳에 보관하고 친구에게 간편하게 전송
                  <br />
                  할 수 있습니다. 이제껏 경험하지 못한 새로운
                  <br />
                  방법으로 디지털 자산을 사용하세요.
                </div>
                <BsArrowRight className='mt-10 text-2xl group-hover:text-[#0163CF] transition-all' />
              </div>
            </div>

            <div className='w-1/3 cursor-pointer group sm:w-full'>
              <div className='relative w-[98%] aspect-square rounded-xl overflow-hidden group-hover:w-full transition-all '>
                <Image
                  src='/home/section5-4.png'
                  alt='Home Section5 Image4'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div>
                <div className='text-xl text-[#12161a] font-bold mt-5 group-hover:text-[#0163CF] transition-all'>
                  Klaytn API Service
                </div>
                <div className='text-[#3d454d] leading-[1.5] mt-3'>
                  우리는 경계선을 지우는 사람들입니다.
                  <br />
                  블록체인 애플리케이션 개발팀의 성공을
                  <br />
                  지원하는 Klaytn API Service(KAS)는 블록체인의
                  <br />
                  서비스 개발을 상향 시키고 비용을 절감시킵니다.
                </div>
                <BsArrowRight className='mt-10 text-2xl group-hover:text-[#0163CF] transition-all' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
