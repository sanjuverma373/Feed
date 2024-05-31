import React, { useState } from 'react'
import Navsection from './Navsection'
import threeLine from '../assets/images/svg/threeLine.svg'
import mapSvg from '../assets/images/svg/map.svg'
import footerPet from '../assets/images/svg/footerPet.svg'
import swapSvg from '../assets/images/svg/swipe.svg'
import heartSvg from '../assets/images/svg/heart.svg'
import { dataArray } from './comman/Helper';

const Feed = () => {
  const [first, setfirst] = useState("tab1")
  function tabchanges(tabs) {
    setfirst(tabs)
  }
  const [open, setopen] = useState(false);

  function handle() {
    setopen(!open);
  }

  const [open1, setopen1] = useState(false);

  function handle1() {
    setopen1(!open1);
  }
  return (
    <div className=' bg-lightCreem min-h-[825px] max-w-[393px] mx-auto'>
      <Navsection />
      <div className=' px-4 mx-auto w-full pt-[22px]'>
        <div className=' flex items-center justify-center gap-2 pb-4'>
          <button onClick={() => tabchanges("tab1")} className={` ${first === "tab1" && " !border !border-lightGreen !shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown "} shadow-[1px_1px_0px_0px_#CBECD6] w-[98px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px] `}>All</button>
          <button onClick={() => tabchanges("tab2")} className={` ${first === "tab2" && " !border !border-lightGreen !shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown "} shadow-[1px_1px_0px_0px_#CBECD6] w-[109px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px] `}>Leaderboard</button>

        </div>
        {
          first === "tab1" &&
          <div>
            <div className=' overflow-y-scroll my-scroll max-w-[393px] h-[634px]'>
      <div className={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {dataArray.map((dataItem) => (
          <div key={dataItem.id} className='max-w-[361px] rounded-s border bg-lightWhite p-2 mb-2'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <img src={dataItem.img} alt="fishgreen" />
                <div>
                  <p className='font-Inter text-base leading-[19px]'> 
                    <span className='text-darkBlack'>16982</span>
                    <span className='text-lightBrown'> attacked</span>
                    <span className='text-darkBlack'> Retardio</span>
                  </p>
                  <p className='text-base font-Inter leading-[19px]'>
                    <span className='font-normal text-lightBrown'> and</span>
                    {/* <span className={`font-bold ${dataItem.loss.includes('won') ? 'text-lightGreen' : 'text-red'}`}>
                      {dataItem.text}
                    </span> */}
                  </p>
                </div>
              </div>
              <p className='font-Inter font-normal text-[12px] leading-[14px]'>
                13mn ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
        }
        {
          first === "tab2" &&
          <div>
            <div className=' flex items-center gap-[6px] mb-2'>
              <span
                onClick={handle}
                className={`flex w-[32px] h-[16px] rounded-full bg-lightWhite relative shadow-[1px_1px_0px_0px_#16653480] items-center cursor-pointer ${open ? " !bg-lightGreen !shadow-[inset_2px_2px_0px_0px_#0C0A0980] " : ""}`}>
                <span
                  className={`flex w-[10.6px] h-[9.6px] bg-lightGreen rounded-full !shadow-[inset_2px_2px_0px_0px_#0C0A0980]  absolute  duration-300 ${open ? "left-[19px] !bg-lightWhite !shadow-[1px_1px_0px_0px_#16653480]" : "left-[4px]"}`}
                ></span>
              </span>
              <p className=' font-Inter font-normal text-xs leading-[14.52px] text-darkBrown'>Show Bonkable (32)</p>
            </div>
            <div className=' flex items-center gap-[6px] mb-2'>
              <span
                onClick={handle1}
                className={`flex w-[32px] h-[16px] rounded-full bg-lightWhite relative shadow-[1px_1px_0px_0px_#16653480] items-center cursor-pointer ${open1 ? " !bg-lightGreen !shadow-[inset_2px_2px_0px_0px_#0C0A0980] " : ""}`}>
                <span
                  className={`flex w-[10.6px] h-[9.6px] bg-lightGreen rounded-full !shadow-[inset_2px_2px_0px_0px_#0C0A0980]  absolute  duration-300 ${open1 ? "!left-[19px] !bg-lightWhite !shadow-[1px_1px_0px_0px_#16653480]" : "left-[4px]"}`}
                ></span>
              </span>
              <p className=' font-Inter font-normal text-xs leading-[14.52px] text-darkBrown'>My pets</p>
            </div>
          </div>
        }
      </div>
      <div className='bg-lightWhite flex items-center h-[69px] px-[21.5px]'>
        <div className=' flex justify-between items-center w-[350px]'>
          <div onClick={() => tabchanges("tab3")} className={` ${first === "tab3" && " !bg-lightCreem !flex !items-center !justify-center !flex-col "} cursor-pointer`}>
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={threeLine} alt="threeLine" />
              <p className=' font-Inter font-normal text-[11px] leading-[13.31px] text-darkBrown'>Feed</p>
            </div>
          </div>
          <div onClick={() => tabchanges("tab4")} className={` ${first === "tab4" && " !bg-lightCreem !flex !items-center !justify-center !flex-col "} cursor-pointer`}>
            <div className="flex w-[70px] h-[53px] flex-col justify-center  items-center">
              <img src={mapSvg} alt="mapSvg" />
              <p className=' font-Inter font-normal text-[11px] leading-[13.31px] text-darkBrown'>Feed</p>
            </div>
          </div>
          <div onClick={() => tabchanges("tab5")} className={` ${first === "tab5" && " !bg-lightCreem !flex !items-center !justify-center !flex-col "} cursor-pointer`}>
            <div className="flex w-[70px] h-[53px] flex-col justify-center  items-center">
              <img src={footerPet} alt="footerPet" />
              <p className=' font-Inter font-normal text-[11px] leading-[13.31px] text-darkBrown'>Feed</p>
            </div>
          </div>
          <div onClick={() => tabchanges("tab6")} className={` ${first === "tab6" && " !bg-lightCreem !flex !items-center !justify-center !flex-col "} cursor-pointer`}>
            <div className="flex w-[70px] h-[53px] flex-col justify-center  items-center">
              <img src={swapSvg} alt="swapSvg" />
              <p className=' font-Inter font-normal text-[11px] leading-[13.31px] text-darkBrown'>Feed</p>
            </div>
          </div>
          <div onClick={() => tabchanges("tab7")} className={` ${first === "tab7" && " !bg-lightCreem !flex !items-center !justify-center !flex-col "} cursor-pointer`}>
            <div className="flex w-[70px] h-[53px] flex-col justify-center  items-center">
              <img src={heartSvg} alt="heartSvg" />
              <p className=' font-Inter font-normal text-[11px] leading-[13.31px] text-darkBrown'>Feed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
