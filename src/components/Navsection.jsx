import React, { useState } from 'react';
import petSvg from '../assets/images/svg/pet.svg';
import dropDownArrow from '../assets/images/svg/dropDownArrow.svg';


const Navsection = () => {
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
    <div className='pt-[72px]'>
      <div className='px-4 mx-auto w-full'>
        <div className='flex justify-between items-center pb-[23px]'>
          <a className='font-Inter font-bold text-[22px] leading-[26.63px]' href="">Feed</a>
          <div className='relative'>
            <button
              className='bg-lightWhite border border-lightSky w-[100px] h-[27px] flex items-center justify-center rounded'
              onClick={toggleDropdown}
            >
              <img className='mr-2' src={petSvg} alt="petSvg" /> 
              <p className='font-Inter font-normal text-base leading-[19.36px]'>{selectedTab}</p> 
              <img className={`ml-1 text-darkBrown ${isOpen ? 'rotate-180' : ''}`} src={dropDownArrow} alt="dropDownArrow" />
            </button>
            
            {isOpen && (
              <div className='absolute top-full mt-1 w-[100px] bg-white border border-lightSky rounded shadow-md'>
                <ul>
                  <li className={`py-1 px-3 hover:bg-gray-100 !text-darkBrown cursor-pointer ${selectedTab === '#36985' ? 'bg-gray-100' : '!text-darkBrown'}`} onClick={() => handleTabSelect('#36985')}>#36985</li>
                  <li className={`py-1 px-3 hover:bg-gray-100 !text-darkBrown cursor-pointer ${selectedTab === '#36958' ? 'bg-gray-100' : '!text-darkBrown'}`} onClick={() => handleTabSelect('#36958')}>#36958</li>
                  <li className={`py-1 px-3 hover:bg-gray-100 !text-darkBrown cursor-pointer ${selectedTab === '#36895' ? 'bg-gray-100' : '!text-darkBrown'}`} onClick={() => handleTabSelect('#36895')}>#36895</li>
                  <li className={`py-1 px-3 hover:bg-gray-100 !text-darkBrown cursor-pointer ${selectedTab === '#39685' ? 'bg-gray-100' : '!text-darkBrown'}`} onClick={() => handleTabSelect('#39685')}>#39685</li>
                </ul>
              </div>
            )}
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Navsection;