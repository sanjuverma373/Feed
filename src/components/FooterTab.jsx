import React, { useState } from 'react'
import threeLine from '../assets/images/svg/threeLine.svg';
import mapSvg from '../assets/images/svg/map.svg';
import footerPet from '../assets/images/svg/footerPet.svg';
import swapSvg from '../assets/images/svg/swipe.svg';
import heartSvg from '../assets/images/svg/heart.svg';

const FooterTab = () => {
        const [first, setFirst] = useState("tab1");

  const tabchanges = (tabs) => {
    setFirst(tabs);
  };
  return (
    <div >
      <div className='absolute z-20 bottom-0 bg-lightWhite left-0 right-0 border-t border-lightSky3 flex items-center h-[69px] px-[21.5px] w-full'>
        <div className='flex justify-between items-center max-w-[350px]'>
          <div
            onClick={() => tabchanges("tab1")}
            className={`cursor-pointer ${first === "tab1" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={threeLine} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Feed</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tabExplore")}
            className={`cursor-pointer ${first === "tabExplore" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={mapSvg} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Explore</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tabPets")}
            className={`cursor-pointer ${first === "tabPets" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={footerPet} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>My Pets</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tabSwap")}
            className={`cursor-pointer ${first === "tabSwap" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={swapSvg} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Swap</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tabAccount")}
            className={`cursor-pointer ${first === "tabAccount" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={heartSvg} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTab
