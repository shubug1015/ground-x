import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex justify-center items-center w-screen h-[239px] shadow-[0_-1px_0_0_#e0e0e0]'>
      <div className='w-[1180px] h-full pt-[48px]'>
        <div className='relative w-[120px] h-[32px]'>
          <Image src='/footer/logo.png' alt='Footer Logo' layout='fill' />
        </div>

        <div className='text-[#12161a] mt-[20px]'>
          Address : 서울특별시 강남구 테헤란로98길 11 EG빌딩
          <br />
          Mail : contact@groundx.xyz
        </div>

        <div className='flex justify-between items-center'>
          <div className='text-[#6c7680] mt-[28px] mb-10 sm:text-sm'>
            ©GroundX Corp. All rights reserved.
          </div>

          <div className='relative w-[105px] h-[20px]'>
            <Image src='/footer/kakao.png' alt='Kakao Logo' layout='fill' />
          </div>
        </div>
      </div>
    </div>
  );
}
