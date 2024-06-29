import React from 'react'
import "../Styles/mainPage.css"

const Main = () => {
  return (
    <div className="pageInner reset">
        <div className="img noDrag reset"><img src="img/seojun1.png" alt="사진" className='reset'/></div>
        <div className='reset'>
            <div className="noDrag reset">
                <div className="name reset"><h2 className="name1 reset">서준</h2></div>
                <h3 className="nameEn reset">Seojun</h3>
            </div>
            <div className="aboutMe reset">안녕하세요<br className='reset'/>박서준입니다.</div>
        </div>
    </div>
  )
}

export default Main