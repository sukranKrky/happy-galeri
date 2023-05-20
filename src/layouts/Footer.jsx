import React from 'react'
import facebook from "../img/facebook.png"
import insta from "../img/insta.png"
import pinterest from "../img/pinterest.png"
import twitter from "../img/pinterest.png"
import linkedin from "../img/linkedin.png"
import youtube from "../img/youtube.png"
function Footer() {
  return (
    <div className='footer'>
      
      <div class="footerLeft">
            <div class="footerMenu">
                <h1 class="fMenuTitle">HAKKIMIZDA</h1>
                <ul class="fList">
                    <li class="fListItem">Galeri hakkında</li>
                    <li class="fListItem">Ziyaret Kuralları</li>
                    <li class="fListItem">Bizi desteklemek isteyenler için</li>
                    

                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Websitemiz</h1>
                <ul class="fList">
                    <li class="fListItem">Online bilet al</li>
                    <li class="fListItem">Mağaza</li>
                    <li class="fListItem">Koleksiyonlar</li>

                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Contact</h1>
                <ul class="fList">
                    <li class="fListItem">Sıkça sorulan sorular</li>
                    <li class="fListItem">iletişime geç</li>
                    <li class="fListItem">bize fikir verin</li>
                    <li class="fListItem">Kariyer</li>

                </ul>
            </div>


      </div>

      <div className="footerRight">
        <h1>Bizi takip et</h1>
        <hr />
        <ul className='socialMedia'>
         
          <li><img src={facebook} alt="" /></li>
          <li><img src={insta} alt="" /></li>
          <li><img src={twitter} alt="" /></li>
          <li><img src={youtube} alt="" /></li>
          <li><img src={pinterest} alt="" /></li>
          <li><img src={linkedin} alt="" /></li>
        
        </ul>

      </div>
<div className="footerBottom">
  <ul>
    <li>Legal Notice</li>
    <li>Privacy policy</li>
    <li>Cookies</li>
  </ul>

</div>

    </div>
  )
}

export default Footer
