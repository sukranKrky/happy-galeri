import React from 'react'
import logo from "../img/Warm.png"
import logo2 from "../img/HAPPY GALERİ.png"



function Navi() {
  return (
    <div class='navi' >
      
      <img  class='absolute w-10 h-6 m-5 left-0' src={logo} alt="" />

      <img  class='absolute w-48 h-6 left-14 m-5' src={logo2} alt=''/>

      <ul class='flex  p-0 gap-4 absolute  right-10 top-14'>
        <li class='h-6 font-inter font-normal text-xs leading-5 flex items-center tracking-widest uppercase text-gray-600 '>Hakkımızda</li>
        <li class='h-6 font-inter font-normal text-xs leading-5 flex items-center tracking-widest uppercase text-gray-600 '>SIkça SOrulan Sorular</li>
        <li class='h-6 font-inter font-normal text-xs leading-5 flex items-center tracking-widest uppercase text-gray-600 '>Galeri</li>
        <li  class='h-6 font-inter font-normal text-xs leading-5 flex items-center tracking-widest uppercase text-gray-600'>İletişim</li>
        <li  class='h-6 font-inter font-normal text-xs leading-5 flex items-center tracking-widest uppercase text-gray-600 '>Giriş Yap</li>
        <li  class='h-6 font-inter font-normal text-xs leading-5 flex items-center tracking-widest uppercase text-gray-600 '> Alışveriş (0)</li>
      </ul>
    </div>
  )
}

export default Navi
