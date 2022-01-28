import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex justify-center items-center w-screen h-[239px] shadow-[0_-1px_0_0_#e0e0e0] md:h-[230px]'>
      <div className='w-[1180px] h-full pt-[48px] lg:w-[720px] md:w-[330px]'>
        <div className='relative w-[120px] h-[32px] md:w-[96px] md:h-[25.85px]'>
          <Image src='/footer/logo.png' alt='Footer Logo' layout='fill' />
        </div>

        <div className='text-[#12161a] mt-[20px] md:text-[14px] md:mt-[16px]'>
          서울특별시 강남구 테헤란로98길 11 EG빌딩
          <br />
          contact@groundx.xyz
        </div>

        <div className='flex justify-between items-center mt-[28px] md:mt-[20px] md:flex-col md:justify-center md:items-end'>
          <div className='text-[#6c7680] md:text-[14px]  md:w-full'>
            ©GroundX Corp. All rights reserved.
          </div>

          <div className='relative w-[105px] h-[20px] md:mt-[20px] text-right'>
            <Image src='/footer/kakao.png' alt='Kakao Logo' layout='fill' />
          </div>
        </div>
      </div>
    </div>
  );
}
