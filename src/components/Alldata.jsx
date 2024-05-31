import React from 'react';
import fishgreen from '../assets/images/svg/badgeGreen.svg';
import { dataArray } from './comman/Helper';

const Alldata = () => {

  return (
    <div className='bg-lightCreem max-w-[393px] mx-auto px-4'>
      {dataArray.map((dataItem) => (
        <div key={dataItem.id} className='max-w-[361px] rounded-s border bg-white p-2'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <img src={fishgreen} alt="fishgreen" />
              <p className='font-Inter  text-base leading-[19px] '>
                <span className='font-Inter font-normal text-base leading-[19px] text-darkBlack'>
                16982
                </span>
                <span className='font-Inter font-normal text-base leading-[19px] text-lightBrown'>
                attacked
                </span>
                <span className='font-Inter font-normal text-base leading-[19px] text-darkBlack'>
                Retardio
                </span>
              </p>
              <p>
                <span className='font-Inter font-normal text-base leading-[19px] text-lightBrown'>
                and
                </span>
                <span className='font-Inter font-bold text-base leading-[19px] text-lightGreen '>
                won 159.82 points
                </span>
                </p>
            </div>
            <p className='font-Inter font-normal text-[12px] leading-[14px]'>
              {dataItem.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alldata;

{/* <p className=' font-Inter font-bold text-base leading-[19px] max-w-[186px]'><span className=' font-Inter font-normal text-base leading-[19px] text-darkBlack'>16982</span> <span className=' font-Inter font-normal text-base leading-[19px] text-lightBrown'>attacked</span> <span className=' font-Inter font-normal text-base leading-[19px] text-darkBlack'>Retardio</span> <span className='font-Inter font-normal text-base leading-[19px] text-lightBrown'>and</span> won 159.82 points</p> */}
