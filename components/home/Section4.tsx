import type { NextPage } from 'next';
import Image from 'next/image';

const Section4: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[200px]'>
        {/* Title */}
        <h1 className='font-medium text-[36px]'>
          그라운드엑스가 만드는 서비스
        </h1>

        <div className='flex justify-between mt-[80px]'>
          {/* Box1 */}
          <div className='relative w-[380px] aspect-square bg-[#2b79ff] hover:bg-[#052e4d] transition-all duration-300 group'>
            {/* Icon */}
            <div className='absolute right-0 bottom-0 group-hover:opacity-0 transition-all duration-300'>
              <div className='relative w-[278px] h-[283px]'>
                <Image
                  src='/home/section4/icon-1.png'
                  alt='Setion4 Box Icon'
                  layout='fill'
                />
              </div>
            </div>

            {/* Default Text */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] group-hover:opacity-0 transition-all duration-300'>
              <div className='text-white text-[18px] font-medium text-center mt-[73px] group-hover:mt-10 transition-all duration-300'>
                Premium Art & Collectibles
              </div>
              <div className='text-white text-[40px] font-bold text-center mt-[69px] z-[1]'>
                Klip Drops
              </div>
            </div>

            {/* Hover Text */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-full px-[48px] z-[1] opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:mb-0 transition-all duration-300'>
              <div className='text-white leading-[1.6] mt-[60px]'>
                다양한 디지털 아트를 누구나 손쉽게
                <br />
                일상에서 접하고 소유할 수 있도록 합니다.
                <br />
                디지털 아트 큐레이션 갤러리로 한정판
                <br />
                디지털 아트를 유통하는 서비스입니다.
              </div>
              <div className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[108px] z-[1] cursor-pointer'>
                <div className='text-white text-[14px]'>Klip Drops 페이지</div>
                <div className='relative w-[18px] h-[18px]'>
                  <Image
                    src='/home/section4/arrow-right.png'
                    alt='Right Arrow Icon'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Box2 */}
          <div className='relative w-[380px] aspect-square bg-[#2b79ff] hover:bg-[#052e4d] transition-all duration-300 group'>
            {/* Icon */}
            <div className='absolute right-0 bottom-0 group-hover:opacity-0 transition-all duration-300'>
              <div className='relative w-[265px] h-[237px]'>
                <Image
                  src='/home/section4/icon-2.png'
                  alt='Setion4 Box Icon'
                  layout='fill'
                />
              </div>
            </div>

            {/* Default Text */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] group-hover:opacity-0 transition-all duration-300'>
              <div className='text-white text-[18px] font-medium text-center mt-[73px] group-hover:mt-10 transition-all duration-300'>
                Simple & Secure Wallet
              </div>
              <div className='text-white text-[40px] font-bold text-center mt-[69px] z-[1]'>
                Klip
              </div>
            </div>

            {/* Hover Text */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-full px-[46px] z-[1] opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:mb-0 transition-all duration-300'>
              <div className='text-white leading-[1.6] mt-[60px]'>
                내 손안의 디지털 지갑, Klip은 나의 디지털
                <br />
                자산을 안전하게 한 곳에 보관하고 친구에게
                <br />
                간편하게 전송할 수 있습니다.
                <br />
                이제껏 경험하지 못한 새로운 방법으로
                <br />
                디지털 자산을 활용해보세요.
              </div>
              <div className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[82px] z-[1] cursor-pointer'>
                <div className='text-white text-[14px]'>
                  Klip 지갑 소개 페이지
                </div>
                <div className='relative w-[18px] h-[18px]'>
                  <Image
                    src='/home/section4/arrow-right.png'
                    alt='Right Arrow Icon'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Box3 */}
          <div className='relative w-[380px] aspect-square bg-[#2b79ff] hover:bg-[#052e4d] transition-all duration-300 group'>
            {/* Icon */}
            <div className='absolute right-0 bottom-0 group-hover:opacity-0 transition-all duration-300'>
              <div className='relative w-[261px] h-[261px]'>
                <Image
                  src='/home/section4/icon-3.png'
                  alt='Setion4 Box Icon'
                  layout='fill'
                />
              </div>
            </div>

            {/* Default Text */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] group-hover:opacity-0 transition-all duration-300'>
              <div className='text-white text-[18px] font-medium text-center mt-[60px] group-hover:mt-10 transition-all duration-300'>
                Optimal Choices
                <br />
                for your NFT Services
              </div>
              <div className='text-white text-[40px] font-bold text-center mt-[56px] z-[1]'>
                KAS
              </div>
            </div>

            {/* Hover Text */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-full px-[48px] z-[1] opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:mb-0 transition-all duration-300'>
              <div className='text-white leading-[1.6] mt-[60px]'>
                우리는 경계선을 지우는 사람들입니다.
                <br />
                블록체인 애플리케이션 개발팀의 성공을
                <br />
                지원하는 Klaytn API Service(KAS)는
                <br />
                블록체인의 서비스개발을 쉽게하고 비용을
                <br />
                절감시킵니다.
              </div>
              <div className='flex justify-between items-center px-[20px] border border-[#ffffff] w-full h-[52px] mt-[82px] z-[1] cursor-pointer'>
                <div className='text-white text-[14px]'>KAS 소개 페이지</div>
                <div className='relative w-[18px] h-[18px]'>
                  <Image
                    src='/home/section4/arrow-right.png'
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
