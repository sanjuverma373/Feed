import React, { useState } from 'react';
import { dataArray } from './comman/Helper';
import petSvg from '../assets/images/svg/pet.svg';
import dropDownArrow from '../assets/images/svg/dropDownArrow.svg';
import time from '../assets/images/svg/time.svg';


const Alldata = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('#36985');

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    setIsOpen(false); 
  };
  return (
   
    <div className='pt-[72px] bg-lightCreem max-w-[393px] h-[634px]  mx-auto px-4 overflow-hidden'>
      <div className='px-4 mx-auto w-full pb-5'>
        <div className='flex justify-between items-center pb-[23px]'>
          <a className='font-Inter font-bold text-[22px] leading-[26.63px]' href="">Feed</a>
          <div className='relative'>
            <button
              className='bg-lightWhite border border-lightSky w-[100px] h-[27px] flex items-center justify-center rounded'
              onClick={toggleDropdown}
            >
              <img className='mr-2' src={petSvg} alt="petSvg" /> 
              <p className='font-Inter font-normal text-base leading-[19.36px]'>{selectedTab}</p> 
              <img className={`ml-1 ${isOpen ? 'rotate-180' : ''}`} src={dropDownArrow} alt="dropDownArrow" />
            </button>
            
            {isOpen && (
              <div className='absolute top-full mt-1 w-[100px] bg-white border border-lightSky rounded shadow-md'>
                <ul>
                  <li className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${selectedTab === '#36985' ? 'bg-gray-100' : ''}`} onClick={() => handleTabSelect('#36985')}>#36985</li>
                  <li className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${selectedTab === '#36958' ? 'bg-gray-100' : ''}`} onClick={() => handleTabSelect('#36958')}>#36958</li>
                  <li className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${selectedTab === '#36895' ? 'bg-gray-100' : ''}`} onClick={() => handleTabSelect('#36895')}>#36895</li>
                  <li className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${selectedTab === '#39685' ? 'bg-gray-100' : ''}`} onClick={() => handleTabSelect('#39685')}>#39685</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className=' flex justify-center'>
                <div className=' w-[183px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1'>
                 <img src={time} alt="time" />
                 <p className=' font-Inter font-bold text-darkBrown text-xs leading-[14.52px]'>25m 12s</p>
                 <p className=' font-Inter font-normal text-darkBrown text-xs leading-[14.52px]'> to next battle</p>
                </div>
        </div>
      </div>
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
  );
};

export default Alldata;
