import { ceo } from '@libs/video';
import type { NextPage } from 'next';

const CeoMessage: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[122px] pb-[180px] lg:flex lg:flex-col lg:items-center lg:py-[80px] md:py-[60px] md:w-screen md:flex md:flex-col md:items-center'>
        {/* Title */}
        <h1 className='font-medium text-[36px] md:text-[28px]'>
          그라운드엑스 CEO 메세지
        </h1>

        {/* Video */}
        <div className='lg:w-[632px] md:w-[327px]'>
          <video
            key='1'
            controls
            // autoPlay
            loop
            playsInline
            poster='/home/ceoMessage/thumbnail.png'
            className='w-full h-[663.75px] mt-[50px] lg:h-[355.5px] lg:mt-[32px] md:mt-[40px] md:h-[183.94px]'
          >
            <source src={ceo} />
          </video>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
