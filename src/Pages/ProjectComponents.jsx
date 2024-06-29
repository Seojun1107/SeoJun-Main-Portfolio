import React from 'react'

function ProjectComponents({img, title, content, link}) {
  return (
    <div className="project">
        <div className="noDrag projBack"><img src={`img/project/${img}`} alt='포트폴리오 이미지'/></div>
        <div className="projTop">
            <h2>{title}</h2>
        </div>
        <h5>{content}</h5>
        <div className="noDrag projBottom"><a href={link}>바로가기<img src="img/link.svg" alt='포트폴리오 바로가기 로고'/></a></div>
    </div>
  )
}

export default ProjectComponents