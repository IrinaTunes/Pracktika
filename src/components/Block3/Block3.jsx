import React from 'react'
import BgBlock3 from '../../assets/BgBlock3.svg'
import imgBlock3 from '../../assets/imgBlock3.svg'

const Block3 = () => {
  return (
    <div className='   text-black'>
        <div className='relative -z-20 '>
            <img src={BgBlock3} className='absolute w-full top-[170px] ' />
        </div>
        <div className='text-[20px] justify-items-center mt-[170px] font-medium'>
            <p className='text-[#FF2D59]'>Our Documentation</p>
        </div>
        <div className='  text-center text-[42px] font-semibold'>
            <p className='whitespace-pre-line'>{`See what our profile is like and how we work for your\n business`}</p>
        </div>
        <img src={imgBlock3} className='ml-40 mt-[60px]'/>

    </div>
  )
}

export default Block3