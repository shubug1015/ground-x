import Image from 'next/image';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-screen h-[100px] border-b border-[#ffffff26] shadow-[0_4px_8px_0_rgba(0,0,0,0.04)] bg-transparent z-[9999]'>
      <div className='flex justify-between items-center w-[1180px]'>
        {/* Logo */}
        <div className='relative w-[127px] h-[34px]'>
          <Image src='/header/logo.png' alt='Header Logo' layout='fill' />
        </div>

        {/* Navigation Bar */}
        <nav className='flex text-white text-[17px] font-medium space-x-[48px]'>
          <div>회사소개</div>
          <div>사업영역</div>
          <div>인재채용</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
