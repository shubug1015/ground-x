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
        '그라운드엑스에서는 상시 채용을 진행하고 있으며\n각 포지션 별 인력 수요가 발생 할 때마다 채용 공고를 게시하고 있습니다.',
      open: false,
    },
    {
      id: 2,
      question: '두 개 이상 포지션에 중복해서 지원할 수 있나요?',
      answer:
        '같은 직군의 경우 중복지원이 가능합니다. 지원한 포지션들에서 함께 검토 후,\n지원자에게 더 적합하다고 판단하는 포지션을 제안하거나 지원한 포지션 모두\n적합하다고 판단 시, 각 포지션 현업이 함께 인터뷰를 진행하기도 합니다.',
      open: false,
    },
    {
      id: 3,
      question:
        '지금은 지원할 수 있는 공고가 없지만 그라운드엑스에 꼭 합류하고 싶습니다. 이력서를 미리 보내면 향후 포지션 오픈 시 검토될 수있나요?',
      answer:
        '현재 인재풀을 별도로 운영하지 않고 있습니다.\n따라서, 그라운드엑스에 대한 지속적인 관심 부탁드리며, 적합한 공고 오픈 시 지원을 부탁드립니다.',
      open: false,
    },
    {
      id: 4,
      question: '지원서 제출 후 수정이 가능한가요?',
      answer:
        '제출 후 수정 가능합니다. 다만, 이전에 제출된 지원서가 이미 검토 중으로 넘어가\n진행중일 수 있으니 최대한 신중하게 지원서 작성 후 제출을 부탁드립니다.',
      open: false,
    },
    {
      id: 5,
      question: '지원서는 영어로 작성해야 하나요?',
      answer:
        '지원서는 영어 또는 한국어 중 편한 언어로 작성 가능합니다.\n언어 선택에 따른 채용 상의 이익이나 불이익은 없으므로 자유롭게 작성해 주시면 됩니다.',
      open: false,
    },
    {
      id: 6,
      question: '지원 시 학력에 제한이 있나요?',
      answer:
        '각 포지션별 지원 자격을 채용 공고에서 정하고 있습니다.\n지원자의 역량 또는 경험으로 지원 자격을 판단하고 있으며,\n학력으로 인한 제한은 두고 있지 않습니다.',
      open: false,
    },
    {
      id: 7,
      question: '결과 발표까지는 어느정도 기간이 소요되나요?',
      answer:
        '전형별로 기간은 상이하지만, 전형 내의 각 프로세스마다 진행 후\n결과 발표까지 최 대 1주일을 넘기지 않고 있습니다.',
      open: false,
    },
    {
      id: 8,
      question: '과거에 지원했다가 탈락한 경우 다시 지원할 수 있나요?',
      answer:
        '불합격 안내 후 6개월간은 재지원이 불가능합니다.\n6개월 이후에는 다시 자유롭게 지원하실 수 있습니다.',
      open: false,
    },
    {
      id: 9,
      question: '불합격시에도 안내를 받을 수 있을까요?',
      answer:
        '모든 지원자분들께 각 전형별 결과를 안내드리고 있습니다.\n합격 여부와 무관하게 전형 결과를 안내받으실 수 있습니다.',
      open: false,
    },
    {
      id: 10,
      question: '현재 외국에 거주 중인데 지원이 가능할까요?',
      answer:
        '현재 인터뷰를 포함한 모든 채용 전형이 온라인으로 진행되고 있습니다.\n한국에서 취업하는 데에 결격사유가 없으시다면 현재\n외국에 거주하고 있다고 하더라도 충분히 지원이 가능합니다.',
      open: false,
    },
    {
      id: 11,
      question: '추가로 궁금한 사항에 대해서는 어떻게 질문할 수 있나요?',
      answer:
        '아래 이메일을 통해 그라운드엑스 채용 담당자에게 세부 문의사항을 전달주실 수 있습니다.\nrecruit@groundx.xyz',
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
      <div className='w-[1180px] pt-[120px] pb-[160px] lg:w-[720px] md:w-[327px] md:py-[60px]'>
        {/* Title */}
        <h1 className='border-b border-black w-full pb-[80px] text-[#12161a] text-[36px] font-medium leading-[1.4] md:text-[26px] md:pb-[60px]'>
          FAQ
        </h1>

        <div>
          {qnaList.map((qna) => (
            <div key={qna.id} className='w-full border-b border-[#dae0e6]'>
              <div
                onClick={() => handleQnaOpen(qna.id)}
                className='flex justify-between pr-[10px] items-center text-[18px] font-medium py-[25px] my-[15px] hover:bg-[#f7f7f7] rounded-md transition-all cursor-pointer md:text-[16px] md:py-[14px] md:my-[10px]'
              >
                <div
                  className='lg:w-[580px] md:w-[290px]'
                  style={{ wordBreak: 'keep-all' }}
                >
                  <span className='text-[#3388c9]'>Q. </span>
                  {qna.question}
                </div>

                <div className='md:hidden'>
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
                  'text-[#292e33] whitespace-pre-wrap transition-all md:text-[14px]'
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
