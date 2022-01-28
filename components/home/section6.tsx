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
      <div className='w-[1180px] pt-[122px] pb-[180px] lg:w-[720px] md:w-screen md:flex md:flex-col md:items-center'>
        {/* Title & Select Buttons */}
        <div className='flex justify-between items-center w-full lg:flex-col lg:items-start md:w-[330px]'>
          {/* Title */}
          <h1 className='font-medium text-[36px] text-white md:text-[28px]'>
            그라운드엑스 크루 인터뷰
          </h1>

          {/* Select Buttons */}
          <div className='flex space-x-[8px] lg:mt-[40px] md:hidden'>
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
                    src='/tmp/2/section5/arrow-down-md.png'
                    alt='Down Arrow Icon'
                    layout='fill'
                  />
                ) : (
                  <Image
                    src='/tmp/2/section5/arrow-up-md.png'
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
        <div className='w-full h-[640px] mt-[80px] bg-[#656565] lg:h-[400px] md:mt-[40px] md:h-[203px]'></div>
      </div>
    </div>
  );
};

export default Section5;
