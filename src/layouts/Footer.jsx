import React from 'react'
import facebook from "../img/facebook.png"
import insta from "../img/insta.png"
import pinterest from "../img/pinterest.png"
import twitter from "../img/pinterest.png"
import linkedin from "../img/linkedin.png"
import youtube from "../img/youtube.png"
function Footer() {
  return (
    <div className='footer w-[99vw] mt-8 bg-red-950 h-[35vh] '
    >
      
      <div class="footerLeft w-1/2 h-10 flex absolute justify-between left-24 mt-12 text-white ">
            <div class="footerMenu  ">
                <h1 class="fMenuTitle text-xs tracking-[2px] font-extralight uppercase   ">HAKKIMIZDA</h1>
                <ul class="fList">
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light   ">Galeri hakkında</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light  ">Ziyaret Kuralları</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light  ">Bizi desteklemek isteyenler için</li>
                    

                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle text-xs tracking-[2px]  font-extralight uppercase  ">Websitemiz</h1>
                <ul class="fList">
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light">Online bilet al</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light">Mağaza</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light">Koleksiyonlar</li>

                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle text-xs tracking-[2px]  font-extralight uppercase  ">Contact</h1>
                <ul class="fList">
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light ">Sıkça sorulan sorular</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light ">Iletişime geç</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light">Bize fikir verin</li>
                    <li class="fListItem flex text-center text-xs relative right-1 m-1 leading-6 font-light">Kariyer</li>

                </ul>
            </div>


      </div>

      <div className="footerRight box-border absolute right-0 w-2/5 ">
        <h1 class="absolute h-16 left-[80px] top-6  font-light text-xs tracking-[2px]  leading-5 flex items-center tracking-widest uppercase text-white">Bizi takip et</h1>
        <hr  class=" absolute w-80 h-0 left-[175px] top-14 border border-gray-500  "/>
        <ul className='socialMedia  flex text-center h-36 mt-16 border-l border-gray-700'>
         
          <li class="relative inline flex justify-between m-2 mt-10 left-20 "><img  class="w-10 h-10"  src={facebook} alt="" /></li>
          <li  class="relative inline flex justify-between m-2  mt-10 left-20"><img class="w-10 h-10" src={insta} alt="" /></li>
          <li class="relative inline flex justify-between m-2 mt-10 left-20 "><img class="w-10 h-10" src={twitter} alt="" /></li>
          <li class="relative inline flex justify-between m-2 mt-10 left-20"><img class="w-10 h-10" src={youtube} alt="" /></li>
          <li class="relative inline flex justify-between m-2 mt-10 left-20 "><img class="w-10 h-10" src={pinterest} alt="" /></li>
          <li class="relative inline flex justify-between m-2  mt-10 left-20 "><img class="w-10 h-10" src={linkedin} alt="" /></li>
        
        </ul>

      </div>
<div className="footerBottom relative w-[87vw] h-10 top-[215px] left-24  border-t border-gray-500 ">
  <ul class="flex justify-center  font-normal text-xs leading-5 items-center text-gray-400">
    <li class="relative inline items-center text-center h-12 list-none p-5 ">Legal Notice</li>
    <li class="relative inline items-center text-center h-12 list-none p-5 ">Privacy policy</li>
    <li class="relative inline items-center text-center h-12 list-none p-5 ">Cookies</li>
  </ul>

</div>

    </div>
  )
}

export default Footer
