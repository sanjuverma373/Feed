import React from 'react'

const Tablp = () => {
        return (
                <div>
                        <div className='gap-1'>
                                <div className=' max-w-[361px] mx-auto mt-[33px]'>
                                        <div className=' bg-lightWhite p-4 rounded-lg'>
                                                <div className=' flex items-center justify-between pb-1'>
                                                        <div>
                                                                <p className=' font-Inter font-normal text-base  text-green2'>Position</p>
                                                        </div>
                                                        <div className=' bg-lightWhite shadow-[1px_1px_0px_0px__#342E2E] border border-solid border-black2 rounded w-[229px] p-[16px_16px_16px_32px]'>
                                                                <div className=' flex items-center '>
                                                                        <p className=' font-Inter font-bold text-base text-darkBrown'>50.48</p>
                                                                        <span className=' text-xs font-normal  text-darkBrown font-Inter pl-[5px]'>$FP</span>
                                                                        <span className='text-base font-normal  text-darkBrown font-Inter px-[9px]'>+</span>
                                                                        <p className=' font-Inter font-bold text-base text-darkBrown'>1.96</p>
                                                                        <span className=' text-xs font-normal  text-darkBrown font-Inter pl-[5px]'>pGold</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className=' flex items-center justify-between'>
                                                        <div>
                                                                <p className=' font-Inter font-normal text-base text-green2'>Value</p>
                                                        </div>
                                                        <div className=' bg-lightWhite shadow-[1px_1px_0px_0px__#342E2E] border border-solid border-black2 rounded w-[229px] p-[16px_18px_16px_137px]'>
                                                                <div className=' flex items-center '>
                                                                        <p className=' font-Inter font-bold text-base text-darkBrown'>50.48</p>
                                                                        <span className=' text-xs font-normal  text-darkBrown font-Inter pl-[5px]'>$FP</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <p className=' py-[32px] font-Inter font-normal text-xs text-brown3'>Provide FP side liquidity and earn 2% of all pGOLD - FP volume. Or hold pGold that goes un ip value vs FP.</p>
                                                <button className=' w-[329px] h-[63px] bg-lightGreen  rounded-lg text-lightWhite font-Inter font-bold text-base leading-[20px] duration-300 hover:bg-lightWhite hover:text-darkBrown border border-transparent hover:border hover:border-darkBrown'>Withdraw <span className=' font-normal text-xs block'>FP + pGold</span></button>


                                        </div>
                                </div>
                                <div className=' rounded-lg p-4 mt-1 bg-[#F0FDF4] max-w-[361px]  w-full mx-auto'>
                                        <p className=' font-normal text-base leading-5 text-[#052E16] opacity-50 mb-2 font-Inter'>Amount</p>
                                        <div className=' rounded-lg p-4 max-h-[90px] bg-[#F0FDF4] border-[1px] border-solid border-[#342E2E33] w-full max-w-[329px] flex flex-col gap-1'>
                                                <p className=' font-normal text-[32px] leading-[38.73px] text-[#052E16] font-Inter'>12.3</p>
                                                <p className=' font-normal text-xs leading-[14.52px] tracking-[1%] text-[#052E16] font-Inter'>35.1 $FRENPET available</p>
                                        </div>
                                        <button className=' mt-2 w-[329px]   h-[76px] flex items-center justify-center bg-lightGreen  rounded-lg text-lightWhite font-Inter font-bold text-base leading-[20px] duration-300  hover:bg-lightWhite hover:text-darkBrown border border-transparent hover:border hover:border-darkBrown'>Deposit</button>
                                </div>
                        </div>
                </div>
        )
}

export default Tablp
