import { useScroll } from '@libs/useScroll';
import { cls } from '@libs/utils';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { y } = useScroll();

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-screen h-[100px] border-b border-[#ffffff26] shadow-[0_4px_8px_0_rgba(0,0,0,0.04)] bg-transparent z-[9999] md:absolute md:shadow-none md:border-none md:h-[62px]'>
      <div className='flex justify-between items-center w-[1180px] lg:w-[720px] md:w-[330px]'>
        {/* Logo */}
        <div className='relative w-[127px] h-[34px] md:w-[104px] md:h-[28px]'>
          <Image src='/header/logo.png' alt='Header Logo' layout='fill' />
        </div>

        {/* Navigation Bar */}
        <nav className='flex text-[17px] font-medium space-x-[48px] lg:space-x-[32px]'>
          <div
            onClick={() => window.scrollTo({ top: 1831, behavior: 'smooth' })}
            className={cls(
              y > 1830 && y < 3030 ? 'text-[#38a8fa]' : 'text-white',
              'transition-colors duration-300 cursor-pointer lg:hidden md:hidden'
            )}
          >
            회사소개
          </div>
          <div
            onClick={() => window.scrollTo({ top: 3681, behavior: 'smooth' })}
            className={cls(
              y > 3680 && y < 4450 ? 'text-[#38a8fa]' : 'text-white',
              y > 2620 && y < 3506 ? 'lg:text-[#38a8fa]' : 'lg:text-white',
              'transition-colors duration-300 cursor-pointer lg:hidden md:hidden'
            )}
          >
            사업영역
          </div>
          <div
            onClick={() => window.scrollTo({ top: 4450, behavior: 'smooth' })}
            className={cls(
              y > 4449 ? 'text-[#38a8fa]' : 'text-white',
              'transition-colors duration-300 cursor-pointer lg:hidden md:hidden'
            )}
          >
            인재채용
          </div>
          <Link href='/recruit'>
            <a className='hidden lg:block md:block text-[white] lg:text-[17px] md:text-[16px] hover:text-[#38a8fa] ransition-colors duration-300 cursor-pointer'>
              채용안내
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
