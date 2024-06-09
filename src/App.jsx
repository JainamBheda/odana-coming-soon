import React from "react"
import bike from './assets/bike.png'
import odana from './assets/odana.png'
import fb from './assets/fb.png'
import x from './assets/x.png'
import snap from './assets/snap.png'
import ig from './assets/ig.png'
import linkedIn from './assets/linkedin.png'
import badge from './assets/badge.png'
import arch from './assets/arch.png'
import circle from './assets/circle.png'
import dot from './assets/dot.png'
import ribbon from './assets/ribbon.png'
import square from './assets/square.png'
import triangle from './assets/triangle.png'

function App() {

  return (
    <div className='w-full h-[100vh] bg-[#F5F5F5'>
      <div className="w-full h-[80vh] bg-white flex items-center">
        <img src={badge} alt="" className="absolute w-[10%] md:w-fit md:left-[40px]"/>
        <img src={dot} alt="" className="absolute hidden md:block top-[290px] left-[150px]"/>
        <img src={triangle} alt="" className="absolute top-[50px] left-[30px] w-[7%] md:w-fit md:top-[70px] md:left-[170px] animate-bounce"/>
        <img src={square} alt="" className="hidden md:block absolute bottom-[120px] left-[25px] md:bottom-[280px] md:left-[50px] w-[8%] md:w-fit"/>
        <div className="w-[80%] m-auto flex flex-col mt-1">
          <img src={odana} alt="" className="w-[40%] m-auto" />
          <h1 className="font-medium text-center text-[24px] md:text-[32px] md:-mt-[40px]">WE ARE COMING SOON!!</h1>
          <p className="text-[14px] font-normal md:text-[16px] text-center text-[#828282] mb-5">Stay tuned for something amazing</p>
          <img src={bike} alt="" className="mb-8"/>
          <h4 className="text-[16px] md:text-[20px] tracking-tight leading-tight mb-7 font-normal">Subscribe to our mailing list to get latest updates</h4>
          <div className="w-full flex border py-1 rounded-sm border-slate-300 relative mb-7">
            <input type="text" placeholder="odanaiscoming@gmail.com" className="w-full text-sm px-1"/>
            <button className="absolute top-[-25px] right-[0px] bg-[#38B148] text-white font-bold md:text-[16px] text-sm  py-[6px] px-4 rounded-r-md">Subscribe</button>
          </div>
          <div className="w-[80%] m-auto flex justify-center gap-6 mb-3">
            <img src={fb} alt="" className="cursor-pointer w-auto" />
            <img src={x} alt="" className="cursor-pointer w-auto" />
            <img src={snap} alt="" className="cursor-pointer w-auto" />
            <img src={ig} alt="" className="cursor-pointer w-auto" />
            <img src={linkedIn} alt="" className="cursor-pointer w-auto" />
          </div>
          <p className="text-[#828282] text-[12px] font-normal md:text-[16px] text-center"> &copy; Copyrights Odana || All Rights Reserved.</p>
        </div>
        <img src={arch} alt="" className="absolute top-[100px] right-[50px] w-[10%] md:w-fit md:top-[200px] md:right-[160px]"/>
        <img src={ribbon} alt="" className="absolute top-[170px] right-[30px] w-[10%] md:w-fit md:top-[350px] md:right-[110px]" />
        <img src={circle} alt="" className="absolute w-fit bottom-[70px] right-[30px] md:bottom-[170px] md:right-[50px] animate-pulse"/>
      </div>
    </div>
  )
}

export default App
