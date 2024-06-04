import React from 'react'
import dimondSvg from '../assets/images/svg/dimondSvg.svg';
import monkeySvg from '../assets/images/svg/monkeySvg.svg';


const Tabbuy = () => {
  return (
    <div>
       <div className=' mt-[62px] max-w-[361px] mx-auto relative z-[1]'>
                                                <div className=' w-[56px] h-[56px] flex items-center bg-[#DCFCE7] left-[42%] top-[26%] justify-center border-[1px] border-solid border-[#052E16] rounded-lg shadow-[2px_2px_0px_0px_#0C0A09] font-normal text-xs leading-[14.52px] tracking-[1%] text-black absolute'>
                                                        <span>↓</span>
                                                </div>
                                                <div className=' rounded-lg p-4 bg-[#F0FDF4] border-[1px] border-solid shadow-[4px_4px_0px_0px_#0C0A0980_inset] border-[#052E1633] max-h-[95px] '>
                                                        <div className=' flex justify-between items-center '>
                                                                <p className=' font-normal text-base leading-5 text-green2 font-Inter'>You pay</p>
                                                                <p className=' font-normal text-xs leading-[14.52px] text-darkBrown  tracking-[1%]'>0.25 balance</p>
                                                        </div>
                                                        <div className=' flex justify-between items-center'>
                                                                <p className=' font-semibold text-[40px] leading-[48.41px] font-Inter text-black'>0.1</p>
                                                                <div className=' p-1 flex items-center justify-between rounded bg-[#052E161A] font-normal text-xs leading-[14.52px] text-[#052E16] tracking-[1%] w-[50px]'>
                                                                        <img src={dimondSvg} alt="dimondSvg" />
                                                                        <span>ETH</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className=' rounded-lg p-4 bg-[#F0FDF4] border-[1px] border-solid shadow-[4px_4px_0px_0px_#0C0A0980_inset] border-[#052E1633] max-h-[92px] mt-3 '>
                                                        <p className=' font-normal text-base leading-5 text-green2 font-Inter'>You receive</p>
                                                        <div className=' flex justify-between items-center'>
                                                                <p className=' font-semibold text-[40px] leading-[48.41px] font-Inter text-black'>256.25</p>
                                                                <div className=' p-1 flex items-center justify-between rounded bg-[#052E161A] font-normal text-xs leading-[14.52px] text-[#052E16] tracking-[1%] w-[50px]'>
                                                                        <img src={monkeySvg} alt="monkeySvg" />
                                                                        <span>FP</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <button className='mt-[17px] rounded-[8px] w-full shadow-[1px_1px_0px_0px_#16653480] flex items-center justify-center p-6 font-bold text-[22px] leading-[26.63px] tracking-[1%] text-[#F0FDF4] bg-[#166534] after:absolute duration-300 after:bg-white after:h-[75px] after:right-[-100%] after:w-[800px] after:bottom-[-100%] after:rounded-full hover:text-[#052E16] hover:shadow-[unset] hover:border-[#052E16] border-[1px] border-[#F0FDF4] border-solid overflow-hidden relative hover:after:opacity-100 after:opacity-0 after:duration-300 hover:after:right-[-20%] hover:after:bottom-0'><span className=' relative z-[1]'>Approve</span></button>
                                        </div>
    </div>
  )
}

export default Tabbuy
