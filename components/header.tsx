import { useScroll } from '@libs/useScroll';
import { cls } from '@libs/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = ({ section1Ref, section2Ref, section3Ref }: any) => {
  const { y } = useScroll();
  const router = useRouter();

  const [sectionNum, setSectionNum] = useState<number | null>(null);

  function scrollIntoSection(ref: any, num: number) {
    if (ref.current) {
      const refTop = ref.current.getBoundingClientRect().top;
      const refHeight = ref.current.getBoundingClientRect().height;
      const refOffsetTop = refTop + refHeight;

      console.log(sectionNum, num);

      if (sectionNum !== num && refOffsetTop > 0 && refOffsetTop <= refHeight) {
        console.log('1');
        setSectionNum(num);
      } else if (
        sectionNum === num &&
        (refOffsetTop > refHeight || refOffsetTop < 0)
      ) {
        console.log('2');
        setSectionNum(null);
      }
    }
  }

  function moveToSection(ref: any): any {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollIntoSection(section1Ref, 0);
    scrollIntoSection(section2Ref, 1);
    scrollIntoSection(section3Ref, 2);
  }, [y]);

  // console.log(sectionNum);

  return (
    <div
      className={cls(
        y === 0 ? 'bg-transparent' : 'bg-white',
        'fixed top-0 left-0 flex justify-center items-center w-screen h-[100px] border-b border-[#ffffff26] shadow-[0_4px_8px_0_rgba(0,0,0,0.04)] transition-all z-[9999] md:h-[62px]'
      )}
    >
      <div className='flex justify-between items-center w-[1180px] lg:w-[720px] md:w-[327px]'>
        {/* Logo */}
        <Link href='/'>
          <a
            className={cls(
              y === 0 ? 'block' : 'hidden',
              'relative w-[127px] h-[34px] md:w-[104px] md:h-[28px]'
            )}
          >
            <Image src='/header/logo.png' alt='Header Logo' layout='fill' />
          </a>
        </Link>
        <Link href='/'>
          <a
            className={cls(
              y === 0 ? 'hidden' : 'block',
              'relative w-[127px] h-[34px] md:w-[104px] md:h-[28px]'
            )}
          >
            <Image src='/header/logo-1.png' alt='Header Logo' layout='fill' />
          </a>
        </Link>

        {/* Navigation Bar */}
        <nav className='flex text-[17px] font-medium space-x-[48px] lg:space-x-[32px]'>
          <div
            onClick={() => moveToSection(section1Ref)}
            className={cls(
              y === 0
                ? 'text-white'
                : sectionNum === 0
                ? 'text-[#38a8fa]'
                : 'text-black',
              router.pathname === '/recruit' ? 'hidden' : '',
              'transition-colors duration-300 cursor-pointer lg:hidden md:hidden'
            )}
          >
            회사소개
          </div>
          <div
            onClick={() => moveToSection(section2Ref)}
            className={cls(
              y === 0
                ? 'text-white'
                : sectionNum === 1
                ? 'text-[#38a8fa]'
                : 'text-black',
              router.pathname === '/recruit' ? 'hidden' : '',
              // y > 2620 && y < 3506 ? 'lg:text-[#38a8fa]' : 'lg:text-white',
              'transition-colors duration-300 cursor-pointer lg:hidden md:hidden'
            )}
          >
            사업영역
          </div>
          <div
            onClick={() => moveToSection(section3Ref)}
            className={cls(
              y === 0
                ? 'text-white'
                : sectionNum === 2
                ? 'text-[#38a8fa]'
                : 'text-black',
              router.pathname === '/recruit' ? 'hidden' : '',
              'transition-colors duration-300 cursor-pointer lg:hidden md:hidden'
            )}
          >
            인재채용
          </div>
          <Link href='/'>
            <a
              className={cls(
                y === 0 ? 'text-white' : 'text-black',
                'lg:text-[17px] md:text-[16px] hover:text-[#38a8fa] ransition-colors duration-300 cursor-pointer'
              )}
            >
              회사소개
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
