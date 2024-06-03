import React, { useState } from 'react';
import Navsection from './Navsection';
import threeLine from '../assets/images/svg/threeLine.svg';
import mapSvg from '../assets/images/svg/map.svg';
import footerPet from '../assets/images/svg/footerPet.svg';
import swapSvg from '../assets/images/svg/swipe.svg';
import heartSvg from '../assets/images/svg/heart.svg';
import { dataArray, myArray } from './comman/Helper';
import hummerImg from '../assets/images/svg/hummer.svg';
import sandWatchImg from '../assets/images/svg/sandwatch.svg';
import tady from '../assets/images/svg/tady.svg';
import popupShield from '../assets/images/svg/popupShield.svg';
import scord from '../assets/images/svg/scord.svg';
import popupHeart from '../assets/images/svg/popupHeart.svg';


const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [first, setFirst] = useState("tab1");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const tabchanges = (tabs) => {
    setFirst(tabs);
  };

  const handleToggle = () => setOpen(!open);
  const handleToggle1 = () => setOpen1(!open1);

const modalclose = () => {
  setSecondModalOpen(false); 

}
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setSecondModalOpen(true); 

  };
  const popupModal = (item) => {
    if (item.type === "shield" || item.type === "Bonk") {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  return (
    <div className='bg-lightCreem h-screen overflow-hidden max-w-[393px] mx-auto relative'>
      <Navsection />
      <div className='px-4 mx-auto w-full'>
        {first === "tab1" &&
          <div className='flex justify-center pb-[22px]'>
            <div className='w-[183px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1'>
              <img src={sandWatchImg} alt="hummerImg" />
              <p className='font-Inter font-bold text-darkBrown text-xs leading-[14.52px]'>25m 12s</p>
              <p className='font-Inter font-normal text-darkBrown text-xs leading-[14.52px]'>to battle</p>
            </div>
          </div>
        }
        {first === "tab2" &&
          <div className='flex justify-center pb-[22px]'>
            <div className='w-[139px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1'>
              <img src={hummerImg} alt="hummerImg" />
              <p className='font-Inter font-bold text-darkBrown text-xs leading-[14.52px]'>Ready</p>
              <p className='font-Inter font-normal text-darkBrown text-xs leading-[14.52px]'>to battle</p>
            </div>
          </div>
        }
        <div className='flex items-center justify-center gap-2 pb-4'>
          <button onClick={() => tabchanges("tab1")} className={` ${first === "tab1" && "border border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[98px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>All</button>
          <button onClick={() => tabchanges("tab2")} className={` ${first === "tab2" && "border border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[109px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Leaderboard</button>
        </div>
        {first === "tab1" && (
          <div className='overflow-y-scroll my-scroll max-w-[393px] h-[684px]'>
            <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {dataArray.map((dataItem) => (
                <div
                  key={dataItem.id}
                  className={`max-w-[361px] h-[54px] rounded-[4px] bg-lightWhite p-2 mb-2 ${dataItem.border}`}
                >
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
                          <span>{dataItem.text}</span>
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
        )}
        {first === "tab2" && (
          <div>
            <div className='pb-4'>
              <div className='flex items-center gap-[6px] mb-2'>
                <span
                  onClick={handleToggle}
                  className={`flex w-[32px] h-[16px] rounded-full bg-lightWhite relative shadow-[1px_1px_0px_0px_#16653480] items-center cursor-pointer ${open ? "bg-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980]" : ""}`}
                >
                  <span
                    className={`flex w-[10.6px] h-[9.6px] bg-lightGreen rounded-full shadow-[inset_2px_2px_0px_0px_#0C0A0980] absolute duration-300 ${open ? "left-[19px] bg-lightWhite shadow-[1px_1px_0px_0px_#16653480]" : "left-[4px]"}`}
                  ></span>
                </span>
                <p className='font-Inter font-normal text-xs leading-[14.52px] text-darkBrown'>Show Bonkable (32)</p>
              </div>
              <div className='flex items-center gap-[6px] mb-4'>
                <span
                  onClick={handleToggle1}
                  className={`flex w-[32px] h-[16px] rounded-full bg-lightWhite relative shadow-[1px_1px_0px_0px_#16653480] items-center cursor-pointer ${open1 ? "bg-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980]" : ""}`}
                >
                  <span
                    className={`flex w-[10.6px] h-[9.6px] bg-lightGreen rounded-full shadow-[inset_2px_2px_0px_0px_#0C0A0980] absolute duration-300 ${open1 ? "left-[19px] bg-lightWhite shadow-[1px_1px_0px_0px_#16653480]" : "left-[4px]"}`}
                  ></span>
                </span>
                <p className='font-Inter font-normal text-xs leading-[14.52px] text-darkBrown'>My pets</p>
              </div>
              <div className="bg-lightCreem max-w-[393px] h-[684px] mx-auto overflow-hidden">
                <div className="overflow-y-scroll my-scroll max-w-[393px] h-[684px]">
                  <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {myArray.map((Item) => (
                      <div
                        key={Item.id}
                        className="max-w-[361px] h-[50px] rounded-[4px] border-none bg-lightWhite py-1 px-2 mb-1"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <div className="w-[47px] h-[34px] bg-lightCreem rounded-s p-[6px] flex items-center justify-center">
                              <p className="font-bold text-base leading-[19px] font-Inter m-0 p-0">
                                #1
                              </p>
                            </div>
                            <div>
                              <p className="font-Inter">
                                <span className="text-lightBrown font-normal text-base leading-[19px]">
                                  Based.eth
                                </span>
                                <span className="font-normal text-[12px] leading-[14px] text-lightpurple">
                                  id: 73
                                </span>
                              </p>
                              <p className="text-base font-Inter leading-[19px] text-lightGreen font-bold">
                                1295059.36
                                <span className="font-normal text-[12px] leading-[14px]">
                                  pts
                                </span>
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => popupModal(Item)}
                            className={`border rounded-[6px] max-w-[100px] w-full flex items-center justify-between border-solid p-[9.5px_16px] border-[#16653480] ${Item.id === 3 || Item.id === 10 ? 'shadow-none' : 'shadow-[1px_1px_0px_0px_#16653480]'}`}
                          >
                            <img src={Item.img} alt="shield" />
                            <span className="font-normal font-Inter text-xs leading-[14.52px] tracking-[1%] text-black">
                              {Item.text}
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {isModalOpen && (
              <div className='fixed z-10 inset-0 bg-[#9ED2AECC] max-w-[393px] mx-auto flex items-center justify-center left-0 top-0'>
              <div className='bg-lightCreem rounded-[16px] p-2 max-w-[361px] w-full mx-auto overflow-hidden'>
                  <div className='max-w-[344px] rounded-lg p-4 bg-lightWhite'>
                      <div className=' flex items-center gap-2 mb-4'>
                          <img src={tady} alt="Tady" />
                          <span className=' font-bold text-base leading-5 text-darkBrown font-Inter'>Asphyxiated</span>
                          <span className=' font-normal text-xs leading-[14px] font-Inter tracking-[1%] p-[2px_6px] bg-lightCreem text-[#342E2E]'>id: 679</span>
                      </div>
                      <div className=' flex flex-col gap-2'>
                          <div className=' flex items-center gap-2'>
                              <img src={popupShield} alt="popupShield" />
                              <span className=' font-normal text-base leading-5 text-[#342E2E] font-Inter'>11</span>
                          </div>
                          <div className=' flex items-center gap-2'>
                              <img src={scord} alt="scord" />
                              <span className=' font-normal text-base leading-5 text-[#342E2E] font-Inter'>10</span>
                          </div>
                          <div className=' flex items-center gap-2'>
                              <img src={popupHeart} alt="sheild2" />
                              <span className=' font-normal text-base leading-5 text-[#342E2E] font-Inter'>2d 2h 24m 30s</span>
                          </div>
                      </div>
                  </div>
                  <button onClick={closeModal} className='mt-1 p-2 rounded-[8px] w-full flex items-center justify-center py-[10.5px] font-bold text-[22px] leading-[26.63px] tracking-[1%] text-lightWhite bg-[#166534] border-[2px] border-transparent shadow-[1px_1px_0px_0px_#79B08D] '><span className=' relative z-[1]'>Ok</span></button>
              </div>
          </div>
            )}
            {secondModalOpen && (
       <div className='fixed z-10 inset-0 bg-[#9ED2AECC] max-w-[393px] mx-auto flex items-center justify-center left-0 top-0'>
       <div className='bg-lightCreem rounded-[16px] p-2 max-w-[361px] w-full mx-auto overflow-hidden'>
           <div className='max-w-[344px] rounded-lg p-4 bg-lightWhite'>
               <p className=' font-Inter font-bold text-base leading-5 text-darkBrown'>Rules</p>
               <p className=' font-Inter font-normal text-base leading-5 text-black pt-4'>You can attack a pet above your level every 30mins and earn 0.5% of their rewards.</p>
               <p className=' font-Inter font-normal text-base leading-5 text-black'>A pet can only be attacked once per hour.</p>
           </div>
           <button onClick={modalclose} className='mt-1 p-2 rounded-[8px] w-full flex items-center justify-center py-[10.5px] font-bold text-[22px] leading-[26.63px] tracking-[1%] text-lightWhite bg-[#166534] border-[2px] border-transparent shadow-[1px_1px_0px_0px_#79B08D] '><span className=' relative z-[1]'>Ok</span></button>
       </div>
   </div>
      )}
          </div>
        )}
      </div>
      <div className='absolute z-20 bottom-0 bg-lightWhite left-0 right-0 border-t border-lightSky3 flex items-center h-[69px] px-[21.5px] w-full'>
        <div className='flex justify-between items-center max-w-[350px]'>
          <div
            onClick={() => tabchanges("tab3")}
            className={`cursor-pointer ${first === "tab3" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={threeLine} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Feed</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tab4")}
            className={`cursor-pointer ${first === "tab4" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={mapSvg} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Explore</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tab5")}
            className={`cursor-pointer ${first === "tab5" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={footerPet} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>My Pets</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tab6")}
            className={`cursor-pointer ${first === "tab6" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={swapSvg} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Swap</p>
            </div>
          </div>
          <div
            onClick={() => tabchanges("tab7")}
            className={`cursor-pointer ${first === "tab7" ? "!bg-lightCreem opacity-100 flex items-center justify-center flex-col" : "opacity-80"}`}
          >
            <div className="flex w-[70px] h-[53px] flex-col justify-center items-center">
              <img src={heartSvg} alt="mapSvg" />
              <p className='font-Inter font-normal text-[11px] leading-[13.31px] !text-darkBrown'>Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
