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
    <div className='flex justify-center bg-[#212731]'>
      <div className='w-[1180px] pt-[122px] pb-[180px] lg:flex lg:flex-col lg:items-center lg:py-[80px] md:py-[60px] md:w-screen md:flex md:flex-col md:items-center'>
        {/* Title & Select Buttons */}
        <div className='flex justify-between items-center w-full lg:flex-col lg:items-start lg:w-[632px] md:w-[327px]'>
          {/* Title */}
          <h1 className='font-medium text-[36px] text-white md:text-[28px]'>
            그라운드엑스 크루 인터뷰
          </h1>

          {/* Select Buttons */}
          <div className='flex space-x-[8px] lg:mt-[40px] lg:hidden md:hidden'>
            <div
              onClick={() => selectVideo(0)}
              className={cls(
                selectedVideo === 0
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
                'flex justify-center items-center border border-white w-[160px] h-[55px] font-medium transition-all cursor-pointer'
              )}
            >
              Klip Biz
            </div>

            <div
              onClick={() => selectVideo(1)}
              className={cls(
                selectedVideo === 1
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
                'flex justify-center items-center border border-white w-[160px] h-[55px] font-medium transition-all cursor-pointer'
              )}
            >
              Klip Drop
            </div>

            <div
              onClick={() => selectVideo(2)}
              className={cls(
                selectedVideo === 2
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
                'flex justify-center items-center border border-white w-[160px] h-[55px] font-medium transition-all cursor-pointer'
              )}
            >
              Klip Dev
            </div>
          </div>

          {/* Tablet & Mobile Select Buttons */}
          <div className='hidden w-full mt-[40px] lg:block md:block'>
            <div
              onClick={toggleSelectVideo}
              className='relative flex justify-between items-center pl-[28px] pr-[20px] border border-white w-full lg:h-[68px] md:h-[56px]'
            >
              <div className='font-medium text-white text-[18px] md:text-[16px]'>
                {selectedVideo === 0
                  ? 'Klip Biz'
                  : selectedVideo === 1
                  ? 'Klip Drops Biz'
                  : 'Klip Dev'}
              </div>

              <div className='relative w-[32px] h-[32px] md:w-[24px] md:h-[24px]'>
                {!selectVideoOpen ? (
                  <Image
                    src='/home/section6/arrow-down.png'
                    alt='Down Arrow Icon'
                    layout='fill'
                  />
                ) : (
                  <Image
                    src='/home/section6/arrow-up.png'
                    alt='Up Arrow Icon'
                    layout='fill'
                  />
                )}
              </div>

              {selectVideoOpen && (
                <div className='absolute lg:w-[632px] md:w-[327px] lg:top-[68px] md:top-[55px] -left-px'>
                  <div
                    onClick={() => selectVideo(0)}
                    className={cls(
                      selectedVideo === 0 ? 'bg-[#f0f4fa]' : 'bg-white',
                      'flex items-center pl-[28px] border border-t-0 border-white w-full lg:h-[68px] md:h-[56px] lg:text-[18px]'
                    )}
                  >
                    <div className='font-medium'>Klip Biz</div>
                  </div>
                  <div
                    onClick={() => selectVideo(1)}
                    className={cls(
                      selectedVideo === 1 ? 'bg-[#f0f4fa]' : 'bg-white',
                      'flex items-center pl-[28px] border border-t-0 border-white w-full lg:h-[68px] md:h-[56px] lg:text-[18px]'
                    )}
                  >
                    <div className='font-medium'>Klip Drops Biz</div>
                  </div>
                  <div
                    onClick={() => selectVideo(2)}
                    className={cls(
                      selectedVideo === 2 ? 'bg-[#f0f4fa]' : 'bg-white',
                      'flex items-center pl-[28px] border border-t-0 border-white w-full lg:h-[68px] md:h-[56px] lg:text-[18px]'
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
        <div className='lg:w-[632px] md:w-[327px]'>
          {selectedVideo === 0 ? (
            <video
              key='1'
              controls
              // autoPlay
              loop
              className='mt-[80px] lg:h-[433px] lg:mt-[32px] md:mt-[40px] md:h-[203px]'
            >
              <source src='https://s3.ap-northeast-2.amazonaws.com/groundx.xyz/klip.mp4' />
            </video>
          ) : selectedVideo === 1 ? (
            <video
              key='2'
              controls
              // autoPlay
              loop
              className='mt-[80px] lg:h-[433px] lg:mt-[32px] md:mt-[40px] md:h-[203px]'
            >
              <source src='https://s3.ap-northeast-2.amazonaws.com/groundx.xyz/klip-drops.mp4' />
            </video>
          ) : (
            <video
              key='3'
              controls
              // autoPlay
              loop
              className='mt-[80px] lg:h-[433px] lg:mt-[32px] md:mt-[40px] md:h-[203px]'
            >
              <source src='https://s3.ap-northeast-2.amazonaws.com/groundx.xyz/klip-dev.mp4' />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section5;
