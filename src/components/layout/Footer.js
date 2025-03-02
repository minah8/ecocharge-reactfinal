import React from 'react';
import '../../scss/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-links'>
        <li>
          <a href='https://www.pipc.go.kr/np/default/page.do?mCode=H010000000'>
            개인정보처리방침
          </a>
        </li>
        <li>
          <a href='https://www.copyright.or.kr/customer-center/user-guide/email-rejection/index.do'>
            이메일 무단수집거부
          </a>
        </li>
        <li>
          <a href='https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=9870'>
            영상정보처리기기 운영관리지침
          </a>
        </li>
        <li>
          <a href='https://www.acrc.go.kr/menu.es?mid=a10201010100'>
            불편민원신고센터
          </a>
        </li>
      </ul>

      <div className='footer-content'>
        <div className='footer-left'>
          <img src='mainLogo.png' alt='Logo' className='footer-logo' />
          {/* <div className='footer-title'>
            E C O
            <br />
            CHARGE
          </div> */}
        </div>

        <div className='footer-info'>
          <p>
            대표: 이영섭 &nbsp;&nbsp;&nbsp; 사업자등록번호: 123-12-123123
            &nbsp;&nbsp;&nbsp;
            <br />
            대표전화: 12345-5678 &nbsp;&nbsp;&nbsp; 이메일: youngsub2@naver.com
            <br />
            주소: 인천광역시 서구 환경로 42(경서동 종합환경연구단지)
            <br />
            &apos;급속충전시설 이용관련문의 및 회원카드 발급문의 한국 자동차
            환경협회 : 1661-9408&apos;
            <br />
          </p>

          <p className='copy'>Copyright 2023. KECO All rights reserved.</p>
        </div>

        <div className='mark'>
          <a
            href='https://www.keco.or.kr'
            title='한국환경공단(새창열림)'
            target='_blank'
            rel='noreferrer'
          >
            <span className='mark01'>한국환경공단</span>
          </a>
          <br />
          <a
            href='http://www.me.go.kr'
            title='환경부(새창열림)'
            target='_blank'
            rel='noreferrer'
          >
            <span className='mark02'>환경부</span>
          </a>
          <br />
          <a
            href='http://www.aea.or.kr'
            title='한국자동차환경협회(새창열림)'
            target='_blank'
            rel='noreferrer'
          >
            <span className='mark03'>한국자동차환경협회</span>
          </a>
          <br />
          <a
            href='http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110'
            target='_blank'
            rel='noreferrer'
          >
            <span className='mark04'>WA웹접근성</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
