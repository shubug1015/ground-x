import type { NextPage } from 'next';
import Image from 'next/image';

const Section4: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[200px] lg:w-[720px] md:w-[330px]'>
        {/* Title */}
        <h1 className='font-medium text-[36px] lg:text-center md:text-left md:text-[28px] md:leading-[1.4]'>
          그라운드엑스가 <br className='hidden md:block' />
          만드는 서비스
        </h1>

        <div className='flex justify-between mt-[80px] lg:flex-col lg:space-y-[50px] lg:items-center'>
          {/* Box1 */}
          <div className='relative w-[380px] aspect-square bg-[#2b79ff] hover:bg-[#052e4d] transition-all duration-300 group lg:w-[440px] md:w-[330px]'>
            {/* Icon */}
            <div className='absolute right-0 bottom-0 group-hover:opacity-0 transition-all duration-300'>
              <div className='relative w-[278px] h-[283px]'>
                <Image
                  src='/tmp/2/section4/icon-1.png'
                  alt='Setion4 Box Icon'
                  layout='fill'
                />
              </div>
            </div>

            {/* Default Text */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] group-hover:opacity-0 transition-all duration-300 md:pl-[24px]'>
              <div className='text-white text-[18px] font-medium text-center mt-[73px] group-hover:mt-10 transition-all duration-300 lg:text-[20px] lg:mt-[85px] md:mt-[75px] md:text-left md:text-[16px]'>
                Premium Art & Collectibles
              </div>
              <div className='text-white text-[40px] font-bold text-center mt-[69px] z-[1] lg:text-[48px] md:text-left md:mt-[40px] md:text-[44px]'>
                Klip Drops
              </div>
            </div>

            {/* Hover Text */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-full px-[48px] z-[1] opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:mb-0 transition-all duration-300 md:px-[24px]'>
              <div className='text-white leading-[1.6] mt-[60px] lg:text-[18px] lg:mt-[75px] md:text-[16px] md:mt-[55px]'>
                디지털 아트 큐레이션 갤러리,
                <br />
                Klip Drops는 다양한 디지털 아트를
                <br />
                누구나 손쉽게 일상에서 접하고 소유할
                <br />수 있도록 유통하는 서비스입니다.
              </div>
              <div className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[108px] z-[1] cursor-pointer lg:h-[60px] md:mt-[60px]'>
                <div className='text-white text-[14px] lg:text-[18px] md:text-[16px]'>
                  Klip Drops 페이지
                </div>
                <div className='relative w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'>
                  <Image
                    src='/tmp/2/section4/arrow-right.png'
                    alt='Right Arrow Icon'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Box2 */}
          <div className='relative w-[380px] aspect-square bg-[#2b79ff] hover:bg-[#052e4d] transition-all duration-300 group lg:w-[440px] md:w-[330px]'>
            {/* Icon */}
            <div className='absolute right-0 bottom-0 group-hover:opacity-0 transition-all duration-300'>
              <div className='relative w-[265px] h-[237px]'>
                <Image
                  src='/tmp/2/section4/icon-2.png'
                  alt='Setion4 Box Icon'
                  layout='fill'
                />
              </div>
            </div>

            {/* Default Text */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] group-hover:opacity-0 transition-all duration-300 md:pl-[24px]'>
              <div className='text-white text-[18px] font-medium text-center mt-[73px] group-hover:mt-10 transition-all duration-300 lg:text-[20px] lg:mt-[85px] md:mt-[75px] md:text-left md:text-[16px]'>
                Simple & Secure Wallet
              </div>
              <div className='text-white text-[40px] font-bold text-center mt-[69px] z-[1] lg:text-[48px] md:text-left md:mt-[40px] md:text-[44px]'>
                Klip
              </div>
            </div>

            {/* Hover Text */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-full px-[48px] z-[1] opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:mb-0 transition-all duration-300 md:px-[24px]'>
              <div className='text-white leading-[1.6] mt-[60px] lg:text-[18px] lg:mt-[75px] md:text-[16px] md:mt-[55px]'>
                내 손안의 디지털 지갑,
                <br />
                Klip은 나의 디지털 자산을 안전하게 한 곳
                <br />
                에 보관하고 친구에게 간편하게 전송할 수
                <br />
                있는 서비스입니다.
              </div>
              <div className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[108px] z-[1] cursor-pointer lg:h-[60px] md:mt-[60px]'>
                <div className='text-white text-[14px] lg:text-[18px] md:text-[16px]'>
                  Klip 지갑 소개 페이지
                </div>
                <div className='relative w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'>
                  <Image
                    src='/tmp/2/section4/arrow-right.png'
                    alt='Right Arrow Icon'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Box3 */}
          <div className='relative w-[380px] aspect-square bg-[#2b79ff] hover:bg-[#052e4d] transition-all duration-300 group lg:w-[440px] md:w-[330px]'>
            {/* Icon */}
            <div className='absolute right-0 bottom-0 group-hover:opacity-0 transition-all duration-300'>
              <div className='relative w-[261px] h-[261px]'>
                <Image
                  src='/tmp/2/section4/icon-3.png'
                  alt='Setion4 Box Icon'
                  layout='fill'
                />
              </div>
            </div>

            {/* Default Text */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] group-hover:opacity-0 transition-all duration-300 md:pl-[24px]'>
              <div className='text-white text-[18px] font-medium text-center mt-[60px] group-hover:mt-10 transition-all duration-300 lg:text-[20px] lg:mt-[85px] md:mt-[62px] md:text-left md:text-[16px]'>
                Optimal Choices
                <br />
                for your NFT Services
              </div>
              <div className='text-white text-[40px] font-bold text-center mt-[56px] z-[1] lg:text-[48px] md:text-left md:mt-[40px] md:text-[44px]'>
                KAS
              </div>
            </div>

            {/* Hover Text */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-full px-[48px] z-[1] opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:mb-0 transition-all duration-300 md:px-[24px]'>
              <div className='text-white leading-[1.6] mt-[60px] lg:text-[18px] lg:mt-[75px] md:hidden md:text-[16px] md:mt-[55px]'>
                Klaytn API Service,
                <br />
                KAS는 블록체인 서비스를 더 쉽고 빠르게
                <br />
                만들 수 있도록 블록체인 애플리케이션
                <br />
                개발팀의 서비스의 성공을 지원하는 서비스
                <br />
                입니다.
              </div>

              <div className='hidden text-white leading-[1.6] md:block md:text-[16px] md:mt-[55px]'>
                Klaytn API Service, KAS는 블록체인
                <br />
                서비스를 더 쉽고 빠르게 만들 수 있도록
                <br />
                블록체인 애플리케이션 개발팀의 서비스의
                <br />
                성공을 지원하는 서비스입니다.
              </div>

              <div className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[82px] z-[1] cursor-pointer lg:h-[60px] md:mt-[60px]'>
                <div className='text-white text-[14px] lg:text-[18px] md:text-[16px]'>
                  KAS 소개 페이지
                </div>
                <div className='relative w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'>
                  <Image
                    src='/tmp/2/section4/arrow-right.png'
                    alt='Right Arrow Icon'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
