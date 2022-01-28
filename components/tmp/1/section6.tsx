import type { NextPage } from 'next';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const Section6: NextPage = () => {
  return (
    <div className='flex-center-start w-screen'>
      <div className='w-full max-w-[1180px] sm:max-w-[330px]'>
        {/* 섹션6 제목 */}
        <h1 className='relative text-[#12161a] text-4xl font-medium leading-[1.5] mt-[11.25rem] sm:text-2xl sm:leading-[1.5]'>
          회사는 혁신을 위해,
          <br />
          구성원에게 아낌 없는 보상과
          <br />
          지원을 다 할 책임이 있습니다.
          <div className='absolute -top-12 -left-[8.5rem] w-[13rem] h-[16rem] -z-[1]'>
            <Image
              src='/tmp/section6-1.png'
              alt='Home Section6 Image1'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </h1>

        {/* 섹션6-1 */}
        <div className='mt-[6.25rem]'>
          <div className='flex-between-start space-x-10 sm:flex-col sm:space-x-0 sm:space-y-10'>
            <h2 className='w-1/4 text-[1.375rem] text-[#9d9d9d] font-medium leading-[1.5] sm:w-full'>
              우리는 당신의 건강을
              <br />
              생각합니다.
            </h2>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                간식지원
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                업무 중간중간 즐길 수 있는
                <br />
                무제한 스낵 바와 커피를 제공합니다.
              </div>
            </div>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                최고 수준의 보험 보장
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[4.63rem] sm:mb-14'>
                보장되는 보험범위를 기술합니다.
                <br />
                보장되는 보험범위를 기술합니다.
                <br />
                보장되는 보험범위를 기술합니다.
              </div>
            </div>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                신체 검사
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                건강관리와 각종 질병 예방을 위해
                <br />
                건강검진을 실시합니다.
              </div>
            </div>
          </div>
        </div>

        {/* 섹션6-2 */}
        <div className='mt-20'>
          <div className='flex-between-start space-x-10 sm:flex-col sm:space-x-0 sm:space-y-10'>
            <h2 className='w-1/4 text-[1.375rem] text-[#9d9d9d] font-medium leading-[1.5] sm:w-full'>
              개인 생활을
              <br />
              잊지 마세요
            </h2>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                유급 휴가
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                8시간을 일한다고 생산적인 사람이 되진 않습니다.
                <br />
                때로는 환기가 필요합니다.
              </div>
            </div>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                경조사 지원
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                경조사 발생시 축하와 조의의 마음을
                <br />
                전하고자 경조휴가와 함께
                <br />
                경조사비 / 화환 / 용품 등을 제공합니다.
              </div>
            </div>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                가족 행사
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                가족의 행복이 곧 회사의 행복입니다.
                <br />
                소중한 날에는 걱정없이 가족과 함께 할
                <br />수 있도록 지원합니다.
              </div>
            </div>
          </div>
        </div>

        {/* 섹션6-3 */}
        <div className='mt-20 mb-[13.75rem] sm:mb-16'>
          <div className='flex-between-start space-x-10 sm:flex-col sm:space-x-0 sm:space-y-10'>
            <h2 className='w-1/4 text-[1.375rem] text-[#9d9d9d] font-medium leading-[1.5] sm:w-full'>
              최대한 활용하세요
            </h2>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                교육 및 도서
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                개인의 역량 증진과 업무를 위한
                <br />
                지원을 아끼지 않습니다. 업무에 필요한
                <br />
                것이 있다면 언제든 요청하세요!
              </div>
            </div>

            <div className='w-1/4 border-b-[0.063rem] border-[#d1d1d1] sm:w-full'>
              <div className='text-lg text-[#12161a] font-medium leading-[1.6]'>
                뛰어난 사무시설
              </div>
              <div className='text-[#292e33] leading-[1.6] mt-5 mb-[6.26rem] sm:mb-14'>
                업무의 집중을 돕는 다양하고
                <br />
                유연한 근무 환경으로 업무 능률을
                <br />
                향상시킵니다.
              </div>
            </div>

            <div className='w-1/4 sm:w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;