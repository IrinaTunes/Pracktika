import React from 'react'
import Vector from '../../assets/Vector.svg'
import StrelkaBlock10 from '../../assets/StrelkaBlock10.svg'
import SendBlock10 from '../../assets/SendBlock10.svg'

const Block10 = () => {
  return (
    <div>
        <div className='relative -z-20 '>
            <img src={Vector} className='absolute w-full top-[480px] ' />
            <img src={Vector} className='absolute w-full top-[-50px]' />
                    
        </div>
        <div className='ml-40 mt-[200px] mb-[370px]'>
            <div className='block bg-[#FFCC00] h-[340px] w-[1120px] rounded-[20px] text-white justify-items-center '>
                <p className='pt-16 text-[16px]'>Are You Ready For</p>
                <p className='pt-4 text-[42px] font-semibold'>Start a New Project</p>
                <button className='bg-[#4C40F7] h-16 w-[200px] flex shadow-[0px_20px_70px_0px_rgba(255,59,47,0.6)] rounded-xl mt-8 pt-[19px] pl-[42.5px] text-[16px] font-semibold'>Start Now <img src={StrelkaBlock10} className='h-3.5 w-5 mt-[5px] ml-4'></img> </button>

            </div>

        </div>
        <div className='ml-40 absolute mt-[-170px]'>
            <div className='block bg-[#4C40F7] h-[340px] w-[1120px] rounded-[20px] text-white justify-items-center '>
                <p className='pt-16 text-[16px]'>Get Notified About Project</p>
                <p className='pt-4 text-[42px] font-semibold'>Subscribe Now</p>
                <input type="email" class="peer ..." className='bg-[#FFFFFF] h-[72px] w-[500px] flex shadow-[0px_8px_50px_0px_rgba(49,35,248,1)] rounded-xl mt-8 pt-[19px] pl-[42.5px]'/>
                <div className='flex -mt-12'>
                    <div>
                        <p className='text-[#ABAFC7] font-light -ml-2.5'> Email</p>
                    </div>
                    <div>
                        <img src={SendBlock10} className='ml-[380px]'></img>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Block10