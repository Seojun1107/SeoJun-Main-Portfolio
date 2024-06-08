import React from 'react'
import '../Styles/projectPage.css'

const Project = () => {
  return (
        <div className="pageInner1">
            <h1 className="noDrag">Project</h1>
            <div className="pageInner2">
                <div className="projects">
                    <div className="project">
                        <div className="noDrag projBack"><img src="img/project/portfolio.png" alt='포폴'/></div>
                        <div className="projTop">
                            <h2>포트폴리오 모음</h2>
                        </div>
                        <h5>한국사 시험대비<br/>웹페이지</h5>
                        <div className="noDrag projBottom"><a href="https://seojun.xyz/portfolio">바로가기<img src="img/link.svg" alt='포폴'/></a></div>
                    </div>
                    <div className="project">
                        <div className="noDrag projBack"><img src="img/project/history.png" alt='포폴'/></div>
                        <div className="projTop">
                            <h2>한국사 웹페이지</h2>
                            <img className="noDrag icon" src="img/icon/1.png" alt='포폴'/>
                        </div>
                        <h5>한국사 시험대비<br/>웹페이지</h5>
                        <div className="noDrag projBottom"><a href="https://seojun.xyz/history">바로가기<img src="img/link.svg" alt='포폴'/></a></div>
                    </div>
                    <div className="project">
                        <div className="noDrag projBack"><img src="img/project/genesis.png" alt='포폴'/></div>
                        <div className="projTop">
                            <h2>라믹 스튜디오</h2>
                            <img className="noDrag icon" src="img/icon/ramicstudio.jpg" alt='포폴'/>
                        </div>
                        <h5>라믹스튜디오<br/>바로가기</h5>
                        <div className="noDrag projBottom"><a href="https://ramicstudio.com">바로가기<img src="img/link.svg" alt='포폴'/></a></div>
                    </div>
                    <div className="project">
                        <div className="noDrag projBack"><img src="img/project/history.png" alt='포폴'/></div>
                        <div className="projTop">
                            <h2>HTML5 학습<br/> 웹페이지</h2>
                        </div>
                        <h5>HTML5 학습<br/>연습 문제집</h5>
                        <div className="noDrag projBottom"><a href="https://seojun.xyz/htmltest">바로가기<img src="img/link.svg" alt='포폴'/></a></div>
                    </div>
                    <div className="project">
                        <div className="noDrag projBack"><img src="img/project/company.png" alt='포폴'/></div>
                        <div className="projTop">
                            <h2>기업형 웹페이지</h2>
                        </div>
                        <h5><br/>기업형 일반 웹 페이지</h5>
                        <div className="noDrag projBottom"><a href="https://seojun.xyz/company">바로가기<img src="img/link.svg" alt='포폴'/></a></div>
                    </div>
                    <div className="project">
                        <div className="noDrag projBack"><img src="img/project/miniblog.png" alt='포폴'/></div>
                        <div className="projTop">
                            <h2>블로그 웹페이지</h2>
                        </div>
                        <h5>모든 사람이 쓸수있는<br/>미니블로그!</h5>
                        <div className="noDrag projBottom"><a href="https://blog.seojun.xyz">바로가기<img src="img/link.svg" alt='포폴'/></a></div>
                    </div>
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