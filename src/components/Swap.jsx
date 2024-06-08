import React, { useState } from 'react'
import copySvg from '../assets/images/svg/copySvg.svg';
import Tabbuy from './Tabbuy';
import Tabgold from './Tabgold';
import Tablp from './Tablp';
import Tabreward from './Tabreward';


const Swap = () => {
        const [first, setFirst] = useState("tabBuy");
        const tabchanges = (tabs) => {
                setFirst(tabs);
        };
        const handleCopy = () => {
                const textToCopy = '0xff0c...3e105';
                navigator.clipboard.writeText(textToCopy).then(() => {
                  alert('Address copied to clipboard!');
                }).catch((err) => {
                  console.error('Could not copy text: ', err);
                });
              };
        return (
                <div>
                        <div className='flex justify-center'>
                                <div className='w-[111px] h-[23px] bg-lightWhite rounded flex items-center justify-center gap-1 mb-[17px]'>
                                        <p className='font-Inter font-normal text-lightGreen text-xs leading-[14.52px]'>0xff0c...3e105</p>
                                        <img className='cursor-pointer' src={copySvg} alt="copySvg" onClick={handleCopy} />
                                </div>
                        </div>
                        <div className=' flex items-center justify-center gap-2'>
                                <button onClick={() => tabchanges("tabBuy")} className={` ${first === "tabBuy" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[65px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Buy FP</button>
                                <button onClick={() => tabchanges("tabGold")} className={` ${first === "tabGold" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[94px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Gold Swap</button>
                                <button onClick={() => tabchanges("tabLp")} className={` ${first === "tabLp" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[71px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Gold LP</button>
                                <button onClick={() => tabchanges("tabReward")} className={` ${first === "tabReward" && "border !border-lightGreen shadow-[inset_2px_2px_0px_0px_#0C0A0980] !text-darkBrown !bg-lightWhite "} shadow-[1px_1px_0px_0px_#CBECD6] w-[78px] h-[32px] flex justify-center items-center text-lightSky2 font-Inter font-normal bg-transparent border border-lightSky rounded text-base leading-[16px]`}>Rewards</button>

                        </div>
                        {first === "tabBuy" && (
                                <div>
                                        <Tabbuy />
                                </div>
                        )}
                        {first === "tabGold" && (
                                <div>
                                        <Tabgold />
                                </div>
                        )}
                        {first === "tabLp" && (
                                <div>
                                        <Tablp />
                                </div>
                        )}
                        {first === "tabReward" && (
                                <div>
                                        <Tabreward/>
                                </div>
                        )}
                </div>
        )
}

export default Swap
