import React from 'react'
import imgBlock7 from '../../assets/imgBlock7.svg'
import Strelka1Block7 from '../../assets/Strelka1Block7.svg'
import Strelka2Block7 from '../../assets/Strelka2Block7.svg'
import img2Block7 from '../../assets/img2Block7.svg'

const Block7 = () => {
  return (
    <div className='bg-[#FE9602] mt-[200px] pb-[100px]'>
        <div>
            <img src={imgBlock7} className='justify-self-center pt-[100px]'></img>
        </div>
        <div className='flex justify-center'>
            <div className='mr-[200px] mt-[60px]'>
                <img src={Strelka1Block7} className=''></img>
            </div>
            <div>
                <p className='whitespace-pre-line text-center text-[28px] text-[#FFFFFF] font-light'>{`We are serious about providing our best service to\n all the customers we help. Customers satisfaction is\n our number one priority.`}</p>

            </div>
            <div className='ml-[200px] mt-[60px]'>
                <img src={Strelka2Block7} className=''></img>
            </div>
        </div>
        <div className='text-center justify-center '>
            <p className='text-white text-[20px] font-semibold mt-11'>Mark Garfield</p>
            <p className='text-white text-[20px] font-semibold mt-2'>CEO & Head of Product</p>
        </div>
        <div>
            <img src={img2Block7} className='ml-[687px] mt-6 '></img>

        </div>
    </div>
  )
}

export default Block7