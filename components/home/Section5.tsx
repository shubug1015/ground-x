import { cls } from '@libs/utils';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const Section5: NextPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const selectVideo = (id: number) => {
    setSelectedVideo(id);
  };

  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[218px]'>
        {/* Title & Select Buttons */}
        <div className='flex justify-between items-center w-full'>
          {/* Title */}
          <h1 className='font-medium text-[36px]'>그라운드엑스 크루 인터뷰</h1>

          {/* Select Buttons */}
          <div className='flex space-x-[8px]'>
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
        </div>

        {/* Video */}
        <div className='w-full h-[640px] mt-[80px] bg-[#cdcdcd]'></div>

        {/* Text */}
        <div className='flex space-x-[40px] mt-[40px]'>
          <div className='text-[24px] font-medium'>
            {selectedVideo === 0
              ? 'Klip Biz'
              : selectedVideo === 1
              ? 'Klip Drops Biz'
              : 'Klip Dev'}
          </div>
          <div className='text-[18px] text-[#292e33] leading-[1.67]'>
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
