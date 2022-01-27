import type { NextPage } from 'next';
import Image from 'next/image';

const Section3: NextPage = () => {
  return (
    <div className='flex justify-center bg-[#f7f7f7]'>
      <div className='w-[1180px] pt-[120px] pb-[166px]'>
        {/* Title */}
        <div className='flex justify-between'>
          <h1 className='text-[#12161a] text-[36px] font-medium leading-[1.4]'>
            채용 프로세스
          </h1>

          <div className='flex justify-between items-center w-[180px] h-[55px] border border-[#292e33] px-[20px] cursor-pointer'>
            <div className='font-medium text-[#12161a]'>채용공고</div>
            <div className='relative w-[18px] h-[18px]'>
              <Image
                src='/recruit/section3/share.png'
                alt='Share Icon'
                layout='fill'
              />
            </div>
          </div>
        </div>

        {/* Section1 */}
        <div>
          <h2 className='text-[24px] font-medium mt-[82px]'>기술 부문</h2>
          {/* Diagram */}
          <div className='flex mt-[40px] space-x-[45px]'>
            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              서류전형
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              코딩테스트
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              1차 인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              2차 인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-[#052e4c] bg-[#052e4c] rounded-full w-[200px] h-[200px] text-[20px] text-white font-bold'>
              입사
            </div>
          </div>

          {/* Text */}
          <div className='flex mt-[40px] space-x-[45px]'>
            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  HR팀에서 1차 서류
                  <br />
                  스크리닝 후 현업 검토
                </div>
              </div>
            </div>

            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>온라인 코딩테스트</div>
              </div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>포지션별 문제 상이</div>
              </div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>테스트 기한 변경 가능</div>
              </div>
            </div>

            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  문제해결력 및<br />
                  실무 기술 면접
                </div>
              </div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  2 Session으로 진행
                  <br />
                  - 1시간 : 문제 해결능력
                  <br />- 1시간 : 기술 + 역량 면접
                </div>
              </div>
            </div>

            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  경영진 인터뷰
                  <br />
                  (주니어의 경우 경영진과
                  <br />
                  협의 후 생략 가능)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section2 */}
        <div>
          <h2 className='text-[24px] font-medium mt-[80px]'>비기술 부문</h2>
          {/* Diagram */}
          <div className='flex mt-[40px] space-x-[45px]'>
            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              서류전형
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              전화인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              1차 인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold'>
              2차 인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-[#052e4c] bg-[#052e4c] rounded-full w-[200px] h-[200px] text-[20px] text-white font-bold'>
              입사
            </div>
          </div>

          {/* Text */}
          <div className='flex mt-[40px] space-x-[45px]'>
            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  HR팀에서 1차 서류
                  <br />
                  스크리닝 후 현업 검토
                </div>
              </div>
            </div>

            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  현업에서 요청했을 경우에
                  <br />만 진행하며 생략될 수 있음
                </div>
              </div>
            </div>

            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  실무진 인터뷰
                  <br />
                  (팀 리더 포함 필수)
                </div>
              </div>
            </div>

            <div>
              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2'>
                  ·
                </div>
                <div className='leading-[1.4]'>
                  경영진 인터뷰
                  <br />
                  (주니어의 경우 경영진과
                  <br />
                  협의 후 생략 가능)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
