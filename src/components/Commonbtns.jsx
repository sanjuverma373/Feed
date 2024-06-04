import React, { useState } from 'react'
import { dataArray, myArray } from './comman/Helper';

const Commonbtns = () => {
        const [first, setFirst] = useState("tab1");

        const tabchanges = (tabs) => {
          setFirst(tabs);
        };
  return (
    <div>
      <div className='flex items-center justify-center gap-2 pb-4'>
          <button onClick={() => tabchanges("tab1")} className={` ${first === "tab1" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[98px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>All</button>
          <button onClick={() => tabchanges("tab2")} className={` ${first === "tab2" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[109px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Leaderboard</button>
        </div>
    </div>
  )
}

export default Commonbtns
