import { useScroll } from '@utils/useScroll';
import Image from 'next/image';

export default function Header() {
  const MAIN_SECTION_HEIGHT = 3000;

  const { y } = useScroll();
  const scrollRatio = (y / MAIN_SECTION_HEIGHT) * 100;

  return (
    <>
      <div
        className='fixed top-0 left-0 flex-center-start w-screen py-8 bg-transparent z-[9999]'
        style={{
          opacity: `${scrollRatio > 95 ? (115 - scrollRatio) / 40 : 1}`,
        }}
      >
        <div className='flex-between-center w-full max-w-[1180px] z-[9999]'>
          <div className='relative w-[7.5rem] h-8'>
            <Image
              src='/logo-dark.png'
              alt='Header Logo'
              layout='fill'
              objectFit='cover'
              className='group-hover:blur-sm transition-all'
            />
          </div>

          <div className='flex text-white font-medium space-x-12'>
            <div className='hover:opacity-80 transition-all cursor-pointer'>
              채용 공고
            </div>

            <div className='hover:opacity-80 transition-all cursor-pointer'>
              궁금한건, 뭐든지
            </div>
            <div className='hover:opacity-80 transition-all cursor-pointer'>
              합류 여정
            </div>
          </div>
        </div>
      </div>

      {scrollRatio >= 115 && (
        <div className='fixed top-0 left-0 flex-center-start w-screen py-4 bg-white z-[9999] border-b border-[#d1d1d1]'>
          <div className='flex-between-center w-full max-w-[1180px] z-[9999]'>
            <div className='relative w-[7.5rem] h-8'>
              <Image
                src='/logo.png'
                alt='Header Logo'
                layout='fill'
                objectFit='cover'
                className='group-hover:blur-sm transition-all'
              />
            </div>

            <div className='flex text-[#12161a] font-medium space-x-12'>
              <div className='hover:opacity-80 transition-all cursor-pointer'>
                채용 공고
              </div>

              <div className='hover:opacity-80 transition-all cursor-pointer'>
                궁금한건, 뭐든지
              </div>
              <div className='hover:opacity-80 transition-all cursor-pointer'>
                합류 여정
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
