import React from 'react'
import Vector from '../../assets/Vector.svg'
import imgBlock1 from '../../assets/imgBlock1.svg'
import StrelkaHeader from '../../assets/StrelkaHeader.svg'


const Block1 = () => {
  return (
    <div className='  text-black'>
        <div className=''>
            <img src={Vector} className='absolute w-full' />
            <img src={imgBlock1} className='absolute  left-[550px] top-[50px]'/>
        </div>
        <div className='w-[1000px] text-[56px] font-semibold pl-40 mt-18 '>
            <p className='whitespace-pre-line'>{'Make your business\n'} <span className='text-[#FF6800]'> more powerful </span> {'\n with us'}</p>
        </div>
        <div className='pl-40 font-extralight text-[18px] mt-4'>
            <p className='whitespace-pre-line'>{`We provide various services to make\n your business grow and get bigger. Your\n satisfaction is our first priority.`}</p>
        </div>
        <div>
          <button className="mt-5 py-[19px] ml-40 bg-[#4C40F7] rounded-2xl px-[35px] py-(19px) flex text-white rounded-2x1 shadow-[-15px_10px_30px_0px_rgba(76,64,247,0.25)] font-semibold h-16 w-[200px]">Get Started <img src={StrelkaHeader} className='h-3.5 w-5 ml-5 mt-[5px]'></img></button>
        </div>
    </div>
  )
}

export default Block1