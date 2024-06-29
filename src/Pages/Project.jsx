import React from 'react'
import '../Styles/projectPage.css'
import ProjectComponents from './ProjectComponents'

function Project(){
  return (
        <div className="pageInner1">
            <h1 className="noDrag">Project</h1>
            <div className="pageInner2">
                <div className="projects">
                    <ProjectComponents img="portfolio.png" title="포트폴리오 모음" content="포트폴리오 모음집 v2" link="https://seojun.xyz/portfolio" alt="포트폴리오 모음집"/>
                    <ProjectComponents img="history.png" title="한국사 웹페이지" content="한국사 시험대비 웹페이지" link="https://seojun.xyz/history" alt="한국사 모음집"/>
                    <ProjectComponents img="genesis.png" title="라믹 스튜디오" content="라믹스튜디오" link="https://ramicstudio.com" alt="라믹스튜디오 웹페이지"/>
                    <ProjectComponents img="portfolio.png" title="HTML5 학습 웹페이지" content="포트폴리오 모음집 v2" link="https://seojun.xyz/htmltest" alt="html5 학습 연습 문제집"/>
                    <ProjectComponents img="company.png" title="기업형 웹페이지" content="기업형 일반 웹페이지" link="https://seojun.xyz/company" alt="기업형 일반 웹 페이지"/>
                    <ProjectComponents img="miniblog.png" title="블로그 웹페이지" content="모든 사람이 쓸수있는 미니블로그!" link="https://blog.seojun.xyz" alt="미니블로그"/>

                    <div className="project" style={{background: "rgb(5, 5, 5)"}}>
                        <div className="projTop">
                            <h2>준비중</h2>
                        </div>
                        <h5>앞으로 더욱 정교한 프로젝트로<br/>찾아뵙겠습니다.</h5>
                        <div className="projBottom"></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Project