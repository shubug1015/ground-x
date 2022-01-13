import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex-center-start w-screen h-60'>
      <div className='w-full max-w-[1180px] sm:max-w-[330px]'>
        <div className='relative w-[7.5rem] h-8 mt-12 mb-5'>
          <Image
            src='/logo.png'
            alt='Footer Logo'
            layout='fill'
            objectFit='cover'
            className='group-hover:blur-sm transition-all'
          />
        </div>

        <div className='text-[#12161a] sm:text-sm'>
          Address : 서울특별시 강남구 테헤란로98길 11 EG빌딩 7-7-7 Roppongi,
          Minato, Tokyo, Japan
          <br />
          Mail : contact@groundx.xyz
        </div>

        <div className='text-[#6c7680] mt-7 mb-10 sm:text-sm'>© 그라운드X</div>
      </div>
    </div>
  );
}
