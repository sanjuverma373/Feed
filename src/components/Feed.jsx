import React, { useState } from 'react';
import Navsection from './Navsection';
import hummerImg from '../assets/images/svg/hummer.svg';
import sandWatchImg from '../assets/images/svg/sandwatch.svg';
import Swap from './Swap';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import threeLine from '../assets/images/svg/threeLine.svg';
import mapSvg from '../assets/images/svg/map.svg';
import footerPet from '../assets/images/svg/footerPet.svg';
import swapSvg from '../assets/images/svg/swipe.svg';
import heartSvg from '../assets/images/svg/heart.svg';

const Feed = () => {
  const [first, setFirst] = useState("tab1");

  const tabchanges = (tabs) => {
    setFirst(tabs);
  };

  return (
    <div className='bg-lightCreem h-screen overflow-hidden max-w-[393px] mx-auto relative'>
      <Navsection />
      <div className='px-4 mx-auto w-full'>
        {first !== "tabSwap" && (
          <> 
            {first === "tab1" && (
              <div className='flex justify-center pb-[22px]'>
                <div className='w-[183px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1'>
                  <img src={sandWatchImg} alt="sandWatchImg" />
                  <p className='font-Inter font-bold text-darkBrown text-xs leading-[14.52px]'>25m 12s</p>
                  <p className='font-Inter font-normal text-darkBrown text-xs leading-[14.52px]'>to battle</p>
                </div>
              </div>
            )}
            {first === "tab2" && (
              <div className='flex justify-center pb-[22px]'>
                <div className='w-[139px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1'>
                  <img src={hummerImg} alt="hummerImg" />
                  <p className='font-Inter font-bold text-darkBrown text-xs leading-[14.52px]'>Ready</p>
                  <p className='font-Inter font-normal text-darkBrown text-xs leading-[14.52px]'>to battle</p>
                </div>
              </div>
            )}
            <div className='flex items-center justify-center gap-2 pb-4'>
              <button onClick={() => tabchanges("tab1")} className={` ${first === "tab1" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[98px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>All</button>
              <button onClick={() => tabchanges("tab2")} className={` ${first === "tab2" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[109px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Leaderboard</button>
            </div>
          </>
        )}
        {first === "tab1" && (
          <div>
            <Tab1 />
          </div>
        )}
        {first === "tab2" && (                         
          <div>
            <Tab2 />
          </div>
        )}
        {first === "tabSwap" && (
          <div>
            <Swap />
          </div>
        )}  
      </div>
      <div className='absolute z-20 bottom-0 bg-lightWhite left-0 right-0 border-t border-lightSky3 flex items-center h-[69px] px-[21.5px] w-full'>
        <div className='flex justify-between items-center max-w-[350px]'>
          <div
            onClick={() => tabchanges("tab1")}
            className={`cursor-pointer ${first === "tab1" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={threeLine} alt="threeLine" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Feed</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tab1")}
            className={`cursor-pointer ${first === "tab1" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
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
              <img src={footerPet} alt="footerPet" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>My Pets</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tabSwap")}
            className={`cursor-pointer ${first === "tabSwap" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={swapSvg} alt="swapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Swap</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tabAccount")}
            className={`cursor-pointer ${first === "tabAccount" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={heartSvg} alt="heartSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
