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
    <div className='w-full'>
      <div className="w-full bg-white flex items-center">
        <img src={badge} alt="" className="absolute w-[10%] md:w-fit md:left-[40px]" />
        <img src={dot} alt="" className="absolute hidden md:block top-[290px] left-[150px] animate-ping" />
        <img src={triangle} alt="" className="absolute top-[50px] left-[30px] w-[7%] md:w-fit md:top-[415px] md:rotate-90 md:left-[700px] animate-bounce md:animate-[anime_3s_ease-in-out_infinite]" />
        <div className="w-full md:w-[80%] m-auto flex flex-col mt-1">
          <img src={odana} alt="" className="w-[40%] md:w-[10%] m-auto" />
          <h1 className="font-medium text-center text-[24px] md:text-[32px] md:-mt-[30px]">WE ARE COMING SOON!!</h1>
          <p className="text-[14px] font-normal md:text-[16px] text-center text-[#828282] mb-5">Stay tuned for something amazing</p>
          <div className="w-[90%] m-auto block md:flex md:justify-between md:border md:shadow-xl md:drop-shadow-lg">
            <div className="w-full md:w-[50%] md:flex md:items-center">
              <img src={bike} alt="" className="mb-8 w-full" />
            </div>
            <div className="md:w-[50%] md:bg-[#5ab466] rounded-l-[150px] md:py-36 flex flex-col gap-3">
              <h4 className="text-[16px] md:text-[25px] tracking-tight leading-tight mb-7 md:w-[80%] md:m-auto md:text-white">Subscribe to our mailing list to get latest updates</h4>
              <div className="w-full md:w-[80%] m-auto flex borde py-1 rounded-sm border-slate-300 relative mb-7">
                <input type="text" placeholder="odanaiscoming@gmail.com" className="w-full text-sm px-2 shadow-xl bg-transparen py-3 focus:outline-none" />
                <button className="absolute top-[-20px right-[0px] bg-[#38B148] text-white font-bold md:text-[16px] text-sm shadow-xl py-[12px] px-4 rounded-r-m">Subscribe</button>
              </div>
              <div className="w-[80%] m-auto flex justify-center gap-6 mb-3">
                <img src={fb} alt="" className="cursor-pointer w-auto" />
                <img src={x} alt="" className="cursor-pointer w-auto" />
                <img src={snap} alt="" className="cursor-pointer w-auto" />
                <img src={ig} alt="" className="cursor-pointer w-auto" />
                <img src={linkedIn} alt="" className="cursor-pointer w-auto" />
              </div>
              <p className="text-white text-[12px] font-normal md:text-[16px] text-center"> &copy; Copyrights Odana || All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <img src={arch} alt="" className="absolute top-[215px] left-[170px] w-[10%] md:w-fit md:top-[300px] md:left-[450px]" />
        <img src={ribbon} alt="" className="absolute top-[315px] right-[30px] w-[10%] md:w-fit md:top-[350px] md:right-[110px]" />
        <img src={circle} alt="" className="absolute w-fit bottom-[55px] right-[70px] md:bottom-[170px] md:right-[50px] animate-pulse" />
      </div>
    </div>
  )
}

export default App
