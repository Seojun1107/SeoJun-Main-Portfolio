import React from 'react'
import "../Styles/aboutPage.css"

const About = () => {
  return (
    <div className="pageInner1">
      <div className="pageInner2">
        <div className="intro">
          <div className="title noDrag"><span className="h3Line"></span>정보</div>
          <div className="introInner1">
            <div className="introInner2">
              <div><p>이름</p>박서준 (Park Seo Jun)</div>
              <div><p>나이</p>19세</div>
              <div><p>학력</p>고등학교 재학</div>
            </div>
            <div className="img noDrag"><img src="img/seojun2.png" alt='사진2'/></div>
          </div>
        </div>
        <div className="info">
          <div className="title noDrag"><span className="h3Line"></span>소개</div>
          <p>
            HTML, CSS, JS를 다를 수 있는<br/>
            고등학생입니다.<br/>
            저는 리액트를 다룰 수<br/>
            있습니다.
          </p>
        </div>  
        <div className="info">
          <div className="title noDrag"><span className="h3Line"></span>자격증 취득</div>
          <p>
            GTQ 포토샵 1급<br/>
            GTQ 일러스트 1급<br/>
            컴퓨터그래픽스운용기능사<br/>
            SW 코딩자격 1급<br/>
            ITQ 파워포인트 A, 인터넷 A, 엑셀 A<br/>
            ITQ OA MASTER<br/>
            ICDL(이미지 프로세싱, 컴퓨터 활용 및 파일관리)<br/>
            ICDL(프리젠테이션, 워드프로세싱, 스프레드시트)<br/>
          </p>
        </div>
        <div className="info">
          <div className="title noDrag"><span className="h3Line"></span>경시대회</div>
          <p>
            2023 전국 서울특별시 ICT경진대회 미디어콘텐츠부문 금상<br/>
            2023 I-TOP 경진대회 일러스트레이터 부문 출전<br/>
          </p>
        </div>
        <div className="skillOutter noDrag">
          <div className="title"><span className="h3Line"></span>프로그래밍 기술</div>
          <div className="skills">
            <div className="skill">
              <span>Python</span>
              <div className="progress">
                <div className="progressBg" style={{width:"70%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>HTML</span>
              <div className="progress">
                <div className="progressBg" style={{width:"90%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="progress">
                <div className="progressBg" style={{width:"80%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>JS</span>
              <div className="progress">
                <div className="progressBg" style={{width:"90%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>React</span>
              <div className="progress">
                <div className="progressBg" style={{width:"85%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About