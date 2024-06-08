import React from 'react'
import "../Styles/mainPage.css"

const Main = () => {
  return (
    <div className="pageInner">
        <div className="img noDrag"><img src="img/seojun1.png" alt="사진" /></div>
        <div>
            <div className="noDrag">
                <div className="name"><h2 className="name1">서준</h2></div>
                <h3 className="nameEn">Seojun</h3>
            </div>
            <div className="aboutMe">안녕하세요<br/>박서준입니다.</div>
        </div>
    </div>
  )
}

export default Main