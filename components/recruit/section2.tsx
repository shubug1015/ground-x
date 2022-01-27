import type { NextPage } from 'next';

const Section2: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[160px] pb-[120px]'>
        {/* Title */}
        <h1 className='text-[#12161a] text-[36px] font-medium leading-[1.4]'>
          아이디어를 마음껏 펼칠 수 있게,
          <br />
          크루에게 아낌없는 보상과 지원을 합니다.
        </h1>

        {/* Section1 */}
        <div className='mt-[161px]'>
          <div className='flex justify-between space-x-10'>
            <h2 className='w-1/4 text-[24px] text-[#9d9d9d] font-medium leading-[1.5]'>
              크루의 건강을
              <br />
              지원합니다.
            </h2>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                단체상해보험
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                크루는 물론 가족(배우자, 자녀, 부모,
                <br />
                배우자의 부모)까지 보장성 보험료와
                <br />
                실손의료비를 지원합니다.
              </div>
            </div>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                건강검진 지원
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                매년 1회 종합건강검진을 무료로
                <br />
                지원하고 검진 휴가를 함께 제공합니다.
              </div>
            </div>

            <div className='w-1/4 h-[196px]' />
          </div>
        </div>

        {/* Section2 */}
        <div className='mt-[68px]'>
          <div className='flex justify-between space-x-10'>
            <h2 className='w-1/4 text-[24px] text-[#9d9d9d] font-medium leading-[1.5]'>
              크루의 휴식을
              <br />
              지원합니다.
            </h2>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                리프레쉬 휴가
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                법정연차를 제외하고,
                <br />
                연간 10일의 리프레쉬 휴가를
                <br />
                추가 부여합니다.
              </div>
            </div>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                Early Bye
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                생일 10만원 상품권 지급과
                <br />
                2시간의 Early Bye를 제공합니다.
              </div>
            </div>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                어린이집
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                직장 협약 어린이집으로,
                <br />
                만 0세부터 5세반까지 구성된
                <br />
                특성화 프로그램을 운영합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Section3 */}
        <div className='mt-[68px]'>
          <div className='flex justify-between space-x-10'>
            <h2 className='w-1/4 text-[24px] text-[#9d9d9d] font-medium leading-[1.5]'>
              크루의 생활을
              <br />
              지원합니다.
            </h2>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                복지카드 제공
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                자기개발, 여가, 취미활동을 위해
                <br />
                연 360만 원 한도의 복지카드를
                <br />
                지급합니다.
              </div>
            </div>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                명절 선물 지급
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                풍요로운 명절에 감사의 마음을
                <br />
                전하기 위해 설과 추석에 각각 30만원씩
                <br />
                지급합니다.
              </div>
            </div>

            <div className='w-1/4 h-[196px] border-b border-[#d1d1d1]'>
              <div className='text-[18px] text-[#12161a] font-medium leading-[1.6]'>
                경조사 지원
              </div>

              <div className='text-[#292e33] leading-[1.6] mt-[20px]'>
                축하와 조의의 마음을 전하고자
                <br />
                경조휴가, 경조사비, 화환, 용품 등을
                <br />
                제공합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
