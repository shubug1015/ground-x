import type { NextPage } from 'next';
import Image from 'next/image';

const Section3: NextPage = () => {
  return (
    <div className='flex justify-center bg-[#f7f7f7]'>
      <div className='w-[1180px] pt-[120px] pb-[166px] lg:w-[720px] lg:pt-[100px] lg:pb-[100px] md:w-[327px] md:py-[60px]'>
        {/* Title */}
        <div className='flex justify-between'>
          <h1 className='text-[#12161a] text-[36px] font-medium leading-[1.4] lg:text-[32px] md:text-[26x]'>
            채용 프로세스
          </h1>

          <div
            onClick={() =>
              window.open(
                'https://careers.kakao.com/jobs?company=SUBSIDIARY_GROUP&page=1&keyword=groundx&employeeType='
              )
            }
            className='flex justify-between items-center w-[180px] h-[55px] border border-[#292e33] px-[20px] cursor-pointer md:hidden'
          >
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
          <h2 className='text-[24px] font-medium mt-[82px] md:mt-[40px] lg:text-[36px] md:text-[24px]'>
            기술 부문
          </h2>
          {/* Diagram */}
          <div className='flex mt-[40px] space-x-[45px] lg:space-x-[25px] md:mt-[33px] md:space-x-[5px]'>
            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px]'>
              서류전형
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px]'>
              코딩테스트
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px] md:text-center'>
              1차 <br className='hidden md:block' />
              인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px] md:text-center'>
              2차 <br className='hidden md:block' />
              인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-[#052e4c] bg-[#052e4c] rounded-full w-[200px] h-[200px] text-[20px] text-white font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px]'>
              입사
            </div>
          </div>

          {/* Text */}
          <div className='flex mt-[40px] space-x-[45px] lg:flex-col lg:space-x-0 lg:space-y-[30px]'>
            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                서류전형
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  HR팀에서 1차 서류 <br className='lg:hidden' />
                  스크리닝 후 현업 검토
                </div>
              </div>
            </div>

            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                코딩 테스트
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  온라인 코딩테스트
                </div>
              </div>

              <div className='flex w-[200px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  포지션별 문제 상이
                </div>
              </div>

              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  테스트 기한 변경 가능
                </div>
              </div>
            </div>

            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                1차 인터뷰
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  문제해결력 및 <br className='lg:hidden' />
                  실무 기술 면접
                </div>
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  2 Session으로 진행
                  <br />
                  - 1시간 : 문제 해결능력
                  <br />- 1시간 : 기술 + 역량 면접
                </div>
              </div>
            </div>

            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                2차 인터뷰
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  경영진 인터뷰
                  <br className='lg:hidden md:block' />
                  (주니어의 경우 경영진과 <br className='lg:hidden' />
                  협의 후 생략 가능)
                </div>
              </div>
            </div>

            <div className='hidden lg:block lg:text-[21px] md:text-[15px] font-medium'>
              입사
            </div>
          </div>
        </div>

        {/* Section2 */}
        <div>
          <h2 className='text-[24px] font-medium mt-[80px] md:mt-[60px] lg:text-[36px] md:text-[24px]'>
            비기술 부문
          </h2>
          {/* Diagram */}
          <div className='flex mt-[40px] space-x-[45px] lg:space-x-[25px] md:mt-[33px] md:space-x-[5px]'>
            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px]'>
              서류전형
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px]'>
              전화인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px] md:text-center'>
              1차 <br className='hidden md:block' />
              인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-black bg-white rounded-full w-[200px] h-[200px] text-[20px] font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px] md:text-center'>
              2차 <br className='hidden md:block' />
              인터뷰
              <div className='absolute -right-[46px] top-1/2 -translate-y-1/2 w-[45px] h-px bg-black' />
            </div>

            <div className='relative flex justify-center items-center border border-[#052e4c] bg-[#052e4c] rounded-full w-[200px] h-[200px] text-[20px] text-white font-bold lg:w-[124px] lg:h-[124px] md:w-[62px] md:h-[62px] md:text-[12px]'>
              입사
            </div>
          </div>

          {/* Text */}
          <div className='flex mt-[40px] space-x-[45px] lg:flex-col lg:space-x-0 lg:space-y-[30px]'>
            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                서류전형
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  HR팀에서 1차 서류 <br className='lg:hidden' />
                  스크리닝 후 현업 검토
                </div>
              </div>
            </div>

            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                전화 인터뷰
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  현업에서 요청했을 경우에
                  <br className='lg:hidden' />만 진행하며 생략될 수 있음
                </div>
              </div>
            </div>

            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                1차 인터뷰
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  실무진 인터뷰
                  <br className='lg:hidden md:block' />
                  (팀 리더 포함 필수)
                </div>
              </div>
            </div>

            <div>
              <div className='hidden lg:block lg:text-[21px] lg:mb-[10px] md:text-[15px] font-medium md:mb-[4px]'>
                2차 인터뷰
              </div>
              <div className='flex w-[200px] lg:w-[720px] md:w-[327px]'>
                <div className='text-[18px] font-bold leading-[1.3] ml-3 mr-2 lg:text-[22px] lg:leading-[1.2]'>
                  ·
                </div>
                <div className='leading-[1.4] lg:text-[20px] md:text-[16px]'>
                  경영진 인터뷰
                  <br className='lg:hidden md:block' />
                  (주니어의 경우 경영진과 <br className='lg:hidden' />
                  협의 후 생략 가능)
                </div>
              </div>
            </div>

            <div className='hidden lg:block  lg:text-[21px] md:text-[15px] font-medium'>
              입사
            </div>
          </div>
        </div>

        {/* Mobile 채용공고 */}
        <div
          onClick={() =>
            window.open(
              'https://careers.kakao.com/jobs?company=SUBSIDIARY_GROUP&page=1&keyword=groundx&employeeType='
            )
          }
          className='justify-between items-center w-[327px] h-[52px] border border-[#292e33] px-[20px] mt-[60px] cursor-pointer hidden md:flex'
        >
          <div className='font-medium text-[#12161a] text-[14px]'>채용공고</div>
          <div className='relative w-[18px] h-[18px]'>
            <Image
              src='/recruit/section3/share.png'
              alt='Share Icon'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
