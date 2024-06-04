import React from 'react'

const Tabreward = () => {
  return (
        <div className='gap-1'>
        <div className=' max-w-[361px] mx-auto mt-[33px]'>
                <div className=' bg-lightWhite p-4 rounded-lg'>
                        <div className=' flex items-center justify-between pb-1'>
                                <div>
                                        <p className=' font-Inter font-normal text-base text-green2'>Burn</p>
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
                                        <p className=' font-Inter font-normal text-base text-green2'>Receive</p>
                                </div>
                                <div className=' bg-lightWhite shadow-[1px_1px_0px_0px__#342E2E] border border-solid border-black2 rounded w-[229px] p-[16px_18px_16px_137px]'>
                                        <div className=' flex items-center '>
                                                <p className=' font-Inter font-bold text-base text-darkBrown'>50.48</p>
                                                <span className=' text-xs font-normal  text-darkBrown font-Inter pl-[5px]'>$FP</span>
                                        </div>
                                </div>
                        </div>
                        <button className=' mt-[32px]  w-[329px] h-[76px] bg-lightGreen  rounded-lg text-lightWhite font-Inter font-bold text-base leading-[20px] duration-300 hover:bg-lightWhite hover:text-darkBrown border border-transparent hover:border hover:border-darkBrown'>Claim Rewards</button>
                        <p className=' pt-4 font-Inter font-bold tracking-[1%] text-xs text-black text-center'>Claiming rewards burns your score and resets your pet level to 0.</p>

                </div>
        </div>

</div>
  )
}

export default Tabreward
