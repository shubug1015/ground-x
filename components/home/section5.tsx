import { cls } from '@libs/utils';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const Section5: NextPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectVideoOpen, setSelectVideoOpen] = useState(false);

  const selectVideo = (id: number) => {
    setSelectedVideo(id);
  };

  const toggleSelectVideo = () => {
    setSelectVideoOpen(!selectVideoOpen);
  };

  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[218px] lg:w-[720px] md:w-screen md:flex md:flex-col md:items-center'>
        {/* Title & Select Buttons */}
        <div className='flex justify-between items-center w-full lg:flex-col lg:items-start md:w-[330px]'>
          {/* Title */}
          <h1 className='font-medium text-[36px] md:text-[28px]'>
            그라운드엑스 크루 인터뷰
          </h1>

          {/* Select Buttons */}
          <div className='flex space-x-[8px] lg:mt-[40px] md:hidden'>
            <div
              onClick={() => selectVideo(0)}
              className={cls(
                selectedVideo === 0
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
                'flex justify-center items-center border border-black w-[160px] h-[55px] font-medium transition-all cursor-pointer'
              )}
            >
              Klip Biz
            </div>

            <div
              onClick={() => selectVideo(1)}
              className={cls(
                selectedVideo === 1
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
                'flex justify-center items-center border border-black w-[160px] h-[55px] font-medium transition-all cursor-pointer'
              )}
            >
              Klip Drop
            </div>

            <div
              onClick={() => selectVideo(2)}
              className={cls(
                selectedVideo === 2
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
                'flex justify-center items-center border border-black w-[160px] h-[55px] font-medium transition-all cursor-pointer'
              )}
            >
              Klip Dev
            </div>
          </div>

          {/* Mobile Select Buttons */}
          <div className='hidden w-full mt-[40px] md:block'>
            <div
              onClick={toggleSelectVideo}
              className='relative flex justify-between items-center pl-[28px] pr-[20px] border border-black w-full h-[56px]'
            >
              <div className='font-medium'>
                {selectedVideo === 0
                  ? 'Klip Biz'
                  : selectedVideo === 1
                  ? 'Klip Drops Biz'
                  : 'Klip Dev'}
              </div>

              <div className='relative w-[24px] h-[24px]'>
                {!selectVideoOpen ? (
                  <Image
                    src='/home/section5/arrow-down-md.png'
                    alt='Down Arrow Icon'
                    layout='fill'
                  />
                ) : (
                  <Image
                    src='/home/section5/arrow-up-md.png'
                    alt='Up Arrow Icon'
                    layout='fill'
                  />
                )}
              </div>

              {selectVideoOpen && (
                <div className='absolute w-[330px] top-[55px] -left-px'>
                  <div
                    onClick={() => selectVideo(0)}
                    className={cls(
                      selectedVideo === 0 ? 'bg-[#f0f4fa]' : 'bg-white',
                      'flex items-center pl-[28px] border border-t-0 border-black w-full h-[56px]'
                    )}
                  >
                    <div className='font-medium'>Klip Biz</div>
                  </div>
                  <div
                    onClick={() => selectVideo(1)}
                    className={cls(
                      selectedVideo === 1 ? 'bg-[#f0f4fa]' : 'bg-white',
                      'flex items-center pl-[28px] border border-t-0 border-black w-full h-[56px]'
                    )}
                  >
                    <div className='font-medium'>Klip Drops Biz</div>
                  </div>
                  <div
                    onClick={() => selectVideo(2)}
                    className={cls(
                      selectedVideo === 2 ? 'bg-[#f0f4fa]' : 'bg-white',
                      'flex items-center pl-[28px] border border-t-0 border-black w-full h-[56px]'
                    )}
                  >
                    <div className='font-medium'>Klip Dev</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video */}
        <div className='w-full h-[640px] mt-[80px] bg-[#cdcdcd] lg:h-[400px] md:mt-[40px] md:h-[203px]'></div>

        {/* Text */}
        <div className='flex space-x-[40px] mt-[40px] lg:flex-col lg:space-x-0 md:w-[330px] md:mt-[20px]'>
          <div className='text-[24px] font-medium md:text-[20px]'>
            {selectedVideo === 0
              ? 'Klip Biz'
              : selectedVideo === 1
              ? 'Klip Drops Biz'
              : 'Klip Dev'}
          </div>

          <div className='text-[18px] text-[#292e33] leading-[1.67] lg:mt-[20px] md:text-[16px] md:leading-[1.6] md:mt-[6px]'>
            영상 내용에 따라 카피라이팅을 작성합니다. 영상 내용에 따라
            카피라이팅을 작성합니다.
            <br />
            영상 내용에 따라 카피라이팅을 작성합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
