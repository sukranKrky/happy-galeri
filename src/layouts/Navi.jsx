import React from 'react'
import logo from "../img/Warm.png"
import logo2 from "../img/HAPPY GALERİ.png"



function Navi() {
  return (
    <div className='navi' >
      
      <img className='logo' src={logo} alt="" />

      <img className='happyGaleri' src={logo2} alt=''/>

      <ul>
        <li>Hakkımızda</li>
        <li>SIkça SOrulan Sorular</li>
        <li>Galeri</li>
        <li>İletişim</li>
        <li>Giriş Yap</li>
        <li> Alışveriş (0)</li>
      </ul>
    </div>
  )
}

export default Navi
