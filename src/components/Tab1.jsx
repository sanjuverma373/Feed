import React from 'react'
import { dataArray } from './comman/Helper';


const Tab1 = () => {
  return (
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
  )
}

export default Tab1
