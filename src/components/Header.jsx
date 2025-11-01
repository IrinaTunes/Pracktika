import React from 'react';
import { AlarmClock } from 'lucide-react'; 
import C from '../assets/C.svg'


const Header = () => {
  return (
    <div>
      <div className='flex mt-5 text-black dark:text-white'>
      </div>
      <div className='flex mx-16 my-3.6 items-center justify-between'>
          <div className=" p-3.5 shadow-[-5px_10px_30px_rgba(76,64,247,0.5) ]">
              <img src={C} alt="" className='ml-[50px]' />
          </div>
          <div className="flex gap-8 -mt-5">
              <a href="" className="text-[#4C40F7] text-[20px] font-semibold ">Home</a>
              <a href="" className="text-[20px] font-semibold text-[#6B6B6B] ml-[60px]">Works</a> 
              <a href="" className="text-[20px] font-semibold text-[#6B6B6B] ml-[60px]">About</a>
          </div>
          <button className="bg-[#4C40F7]  font-semibold -mt-2.5 rounded-2xl px-[35px] py-(19px)  text-white rounded-2x1 shadow-[-15px_10px_30px_0px_rgba(76,64,247,0.25)] py-[19px] mr-[50px] flex ">Contact us </button>
      </div>

    </div>  
  )
}

export default Header