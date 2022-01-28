import type { NextPage } from 'next';
import Image from 'next/image';

const Section4: NextPage = () => {
  const list = [
    {
      id: 0,
      imgUrl: '/home/section5/1.png',
      subtitle: 'Premium Art & Collectibles',
      title: 'Klip Drops',
    },
    {
      id: 1,
      imgUrl: '/home/section5/2.png',
      subtitle: 'Simple & Secure Wallet',
      title: 'Klip',
    },
    {
      id: 2,
      imgUrl: '/home/section5/3.png',
      subtitle: 'Optimal Choices for your NFT Services',
      title: 'KAS',
    },
  ];

  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] py-[120px] lg:w-[720px] md:w-[330px]'>
        {/* Title */}
        <h1 className='font-medium text-[36px] lg:text-center md:text-left md:text-[28px] md:leading-[1.4]'>
          그라운드엑스가 <br />
          만드는 서비스
        </h1>

        <div className='flex justify-between mt-[40px] lg:flex-col lg:space-y-[50px] lg:items-center'>
          {/* Box1 */}
          {list.map((l) => (
            <div key={l.id}>
              <div className='relative w-[380px] h-[280px]'>
                <Image
                  src={l.imgUrl}
                  alt='Setion5 Box Icon'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='text-[18px] font-medium text-[#999999] mt-[20px]'>
                {l.subtitle}
              </div>
              <div className='text-[24px] font-bold mt-[4px]'>{l.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
