import React from 'react';
import DropDown from './DropDown';


const PetsNavbar = () => {
 

  return (
    <div className='pt-[72px]'>
      <div className='px-4 mx-auto w-full'>
        <div className='flex justify-between items-center pb-[23px]'>
          <a className='font-Inter font-bold text-[22px] leading-[26.63px]' href="">My Pets</a>
          <DropDown/>
        </div>        
      </div>
    </div>
  );
};

export default PetsNavbar;