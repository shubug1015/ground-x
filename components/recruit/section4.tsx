import { cls } from '@libs/utils';
import type { NextPage } from 'next';
import { useState } from 'react';

const Section4: NextPage = () => {
  const [qnaList, setQnaList] = useState([
    {
      id: 0,
      question: '현재 홈페이지에 게시된 공고는 언제까지 유효한가요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.\n홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 1,
      question: '새로운 공고는 언제 업로드 되나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 2,
      question: '두개 이상 포지션에 중복해서 지원할 수있나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 3,
      question:
        '지금은 지원할 수 있는 공고가 없지만 그라운드X에 꼭 합류하고 싶습니다. 이력서를 미리 보내면 향후 포지션 오픈 시 검토될 수있나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 4,
      question: '지원서 제출 후 수정이 가능한가요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 5,
      question: '지원서는 영어로 작성해야 하나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 6,
      question: '지원 시 학력에 제한이 있나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 7,
      question: '결과 발표까지는 어느정도 기간이 소요되나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 8,
      question: '과거에 지원했다가 탈락한 경우 다시 지원할 수 있나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 9,
      question: '불합격시에도 안내를 받을 수 있을까요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 10,
      question: '현재 외국에 거주 중인데 지원이 가능할까요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 11,
      question: '추가로 궁금한 사항에 대해서는 어떻게 질문할 수 있나요?',
      answer:
        '모든 공고는 해당 포지션에 대한 채용이 완료될 때까지 유지됩니다.&#13;&#10;홈페이지에 게시되어있는 모든 공고에 지원하실 수 있습니다.',
      open: false,
    },
  ]);

  const handleQnaOpen = (id: number) => {
    setQnaList(
      qnaList.map((qna) => ({
        ...qna,
        open: id === qna.id ? !qna.open : qna.open,
      }))
    );
  };

  return (
    <div className='flex justify-center'>
      <div className='w-[1180px] pt-[120px] pb-[160px]'>
        {/* Title */}
        <h1 className='border-b border-black w-full pb-[80px] text-[#12161a] text-[36px] font-medium leading-[1.4]'>
          FAQ
        </h1>

        <div>
          {qnaList.map((qna) => (
            <div key={qna.id} className='w-full border-b border-[#dae0e6]'>
              <div
                onClick={() => handleQnaOpen(qna.id)}
                className='flex justify-between pr-[10px] items-center text-[18px] font-medium py-[25px] my-[15px] hover:bg-[#f7f7f7] rounded-md transition-all cursor-pointer'
              >
                <div>
                  <span className='text-[#3388c9]'>Q. </span>
                  {qna.question}
                </div>

                <div>
                  {qna.open ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-[24px] w-[24px]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 15l7-7 7 7'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-[24px] w-[24px] opacity-30'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div
                className={cls(
                  qna.open
                    ? 'visible opacity-100 mt-[21px] mb-[40px] h-auto'
                    : 'invisible opacity-0 h-0',
                  'text-[#292e33] whitespace-pre-wrap transition-all'
                )}
              >
                {qna.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
