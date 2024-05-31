import React, { useState } from 'react';
import petSvg from '../assets/images/svg/pet.svg';
import dropDownArrow from '../assets/images/svg/dropDownArrow.svg';
import hummerImg from '../assets/images/svg/hummer.svg';

const Navsection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('#36985');

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle tab selection
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className='pt-[72px]'>
      <div className='px-4 mx-auto w-full'>
        <div className='flex justify-between items-center pb-[23px]'>
          <a className='font-Inter font-bold text-[22px] leading-[26.63px]' href="">Feed</a>
          <div className='relative'>
            {/* Button triggering the dropdown */}
            <button
              className='bg-lightWhite border border-lightSky w-[100px] h-[27px] flex items-center justify-center rounded'
              onClick={toggleDropdown}
            >
              <img className='mr-2' src={petSvg} alt="petSvg" /> 
              <p className='font-Inter font-normal text-base leading-[19.36px]'>{selectedTab}</p> 
              <img className={`ml-1 ${isOpen ? 'rotate-180' : ''}`} src={dropDownArrow} alt="dropDownArrow" />
            </button>
            
            {/* Dropdown content */}
            {isOpen && (
              <div className='absolute top-full mt-1 w-[100px] bg-white border border-lightSky rounded shadow-md'>
                {/* Dropdown items */}
                <ul>
                  {/* Dropdown tabs */}
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
                <div className=' w-[139px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1'>
                 <img src={hummerImg} alt="hummerImg" />
                 <p className=' font-Inter font-bold text-darkBrown text-xs leading-[14.52px]'>Ready</p>
                 <p className=' font-Inter font-normal text-darkBrown text-xs leading-[14.52px]'>to battle</p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Navsection;