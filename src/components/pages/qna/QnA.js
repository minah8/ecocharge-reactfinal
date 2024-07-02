import React, { useEffect, useState } from 'react';
import './QnA.scss';
import CategoryFilter from './CategoryFilter';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: '자주 묻는 질문',
    value: 'manyquestion',
  },
  {
    name: '홈페이지',
    value: 'category1',
  },
  {
    name: '전기차 충전소',
    value: 'category2',
  },
  {
    name: '기타',
    value: 'category3',
  },
];

const qnaList = [
  {
    category: 'manyquestion',
    question: '전기차 충전기의 종류는 어떤 게 있나요?',
    answer:
      '주요 전기차 충전기 종류로는 AC 충전기와 DC 급속 충전기가 있습니다. AC 충전기는 주로 집이나 공공 장소에서 일반적으로 사용되며, DC 급속 충전기는 전기차 배터리를 더 빠르게 충전할 수 있는 고속 충전기입니다.',
  },
  {
    category: 'manyquestion',
    question: '충전 속도는 어떻게 다를까요?',
    answer:
      '충전 속도는 사용하는 충전기의 종류와 전기차의 배터리 용량에 따라 달라집니다. 보통 DC 급속 충전기를 사용할 경우, 전기차 배터리를 30분 이내로 빠르게 충전할 수 있습니다. AC 충전기는 일반적으로 몇 시간이 걸릴 수 있습니다.',
  },
  {
    category: 'manyquestion',
    question: '전기차 충전소에서 제공되는 서비스는 무엇인가요?',
    answer:
      '전기차 충전소에서는 주로 급속 충전 및 일반 충전 서비스를 제공합니다. 급속 충전은 보통 30분 내외로 전기차 배터리를 빠르게 충전할 수 있는 서비스를 말하며, 일반 충전은 보통 몇 시간에서 여러 시간이 걸리는 충전을 의미합니다.',
  },
  {
    category: 'manyquestion',
    question: '전기차 충전소의 위치는 어떻게 찾을 수 있나요?',
    answer:
      '저희 eco charge 사이트를 통해 원하시는 지역을 검색 후 사용 가능한 충전소를 찾을 수 있습니다.',
  },
  {
    category: 'manyquestion',
    question: '전기차 충전소의 운영 시간은 어떻게 되나요?',
    answer:
      '전기차 충전소의 운영 시간은 각각의 충전소마다 다를 수 있습니다. 일부 충전소는 24시간 운영되지만, 일부는 특정 시간대에만 운영될 수 있습니다. 사전에 운영 시간을 확인하는 것이 좋습니다.',
  },
  {
    category: 'manyquestion',
    question:
      '전기차 충전소에서 충전 중 문제가 발생했을 때 어떻게 대응해야 하나요?',
    answer:
      '전기차 충전 중 문제가 발생하면 충전소의 고객 센터에 연락하여 도움을 요청할 수 있습니다. 대부분의 충전소는 사고나 장애 처리를 위한 절차를 마련해 놓고 있습니다.',
  },
  {
    category: 'category1',
    question: '소셜 로그인을 제외한 홈페이지가 제공하는 회원가입은 없나요?',
    answer: '네. 저희 홈페이지는 현재 소셜 로그인만 제공하고 있습니다.',
  },
  {
    category: 'category2',
    question: '자주 방문하는 충전소를 등록하고 싶어요.',
    answer:
      '저희 홈페이지는 현재 즐겨찾기 기능이 준비되어 있습니다. 자주 방문하시는 충전소를 즐겨찾기 해놓으신다면 쉽게 찾으실 수 있습니다.',
  },
  {
    category: 'category3',
    question: '보조금 지원 차를 구매하는 것이 좋은 이유가 뭔가요?',
    answer:
      '보조금 지원 차종은 일반적으로 구매 시 초기 비용이 저렴할 수 있습니다. 이로 인해 차량 운영 비용이 추가로 절감될 수 있습니다.',
  },
  {
    category: 'category3',
    question: '전기차 출시 예정은 뭐가 있나요?',
    answer:
      ' 기아는 EV3, EV4 외에 EV5 모델도 준비하고 있지만 EV5 모델의 출시는 2025년으로 예상되고 있습니다. EV3는 각종 보조금을 받을 경우 3,000만 원대에 구매가 가능할 것으로 예상됩니다. 현재 EV3와 EV4의 국내 출시는 각각 내년 2분기, 내년 4분기로 예상됩니다.',
  },
];

const QnA = () => {
  const [category, setCatecory] = useState('all');
  const [cardOnOff, setCardOnOff] = useState(qnaList);
  const [showList, setShowList] = useState(qnaList);

  const getQnACard = (item, index) => {
    return (
      <div className='faq-card' key={index}>
        <div
          className='faq-card-title'
          onClick={() => {
            let tempCard = cardOnOff;
            tempCard[index].show = !tempCard[index].show;
            setCardOnOff([...tempCard]);
          }}
        >
          <span className='question-mark'>Q.</span>
          <span>{item.question}</span>
        </div>
        <div
          className={
            qnaList[index].show
              ? 'faq-card-answer'
              : 'faq-card-answer faq-card-none'
          }
        >
          <span className='answer-mark'>A.</span>
          <span className='FAQ-card-answer'>{item.answer}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setShowList(
      qnaList.filter((item) => {
        if (category === 'all') return true;
        if (category === item.category) return true;
        return false;
      }),
    );
  }, [category]);

  const navigate = useNavigate();

  return (
    <div className='qnacontainer'>
      <div className='qnatitle'>Q & A</div>
      <div className='questionButtonsBox'>
        <div className='questionButtons'>
          <button
            className='add-question-button'
            onClick={() => navigate('/writeqna')}
          >
            작성하기
          </button>
          <button
            className='go-direct-question-button'
            onClick={() => navigate('/qnalist')}
          >
            1:1 문의
          </button>
        </div>
      </div>

      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
      <div className='fqa-parent'>
        <div className='faq-list'>
          {showList.map((item, index) => getQnACard(item, index))}
        </div>
      </div>
    </div>
  );
};

export default QnA;
