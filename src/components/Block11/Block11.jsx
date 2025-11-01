import React from 'react'
import C from '../../assets/C.svg'
import MapBlock11 from '../../assets/MapBlock11.svg'
import LineBlock11 from '../../assets/LineBlock11.svg'

const Block11 = () => {
  return (
    <div className='bg-[#00113B] pt-[170px] h-[710px]'>
        <div className='flex mt-20'>
            <div className='ml-40'>
                <img src={C} className='ml-[-35px] -mt-5'></img>
                <p className='whitespace-pre-line text-[16px] opacity-75 -mt-2.5 text-white'>{`Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod tempor\n incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud\n exercitation ullamco laboris nisi ut aliquip ex\n ea commodo consequat. Duis aute irure\n dolor in reprehenderit in voluptate velit esse\n cillum dolore eu fugiat nulla pariatur.`}</p>

            </div>
            <div className='ml-[100px]'>
                <p className='text-[20px] font-semibold text-white'>Our Office</p>
                <img src={MapBlock11} className='mt-8'></img>

            </div>
            <div className='ml-[100px]'>
                <p className='text-[20px] font-semibold text-white'>Contact</p>
                <p className='whitespace-pre-line text-white mt-8 opacity-75 text-[16px]'>{`Jl KH Samanhudi\n Metro Atom Plaza Bl\n AKS 1/11, Dki Jakarta`}</p>
                <p className='whitespace-pre-line text-white mt-5 opacity-75 text-[16px]'>{`info@yourdomain.\n com`}</p>
                <p className='text-white mt-5 opacity-75 text-[16px]'> +62 (0) 000 0000 00</p>
            </div>

        </div>
        <img src={LineBlock11} className='ml-40 mt-11'></img>
        <div className='flex text-[#ABAFC7] mt-11 '>
            <p className='ml-40 text-[16px]'>© 2021 Creative Agency</p>
            <p className='ml-[535px] text-[16px]'>Home</p>
            <p className='ml-9 text-[16px]'>Works</p>
            <p className='ml-9 text-[16px]'>About</p>
            <p className='ml-9 text-[16px]'>Pricing </p>
            <p className='ml-9 text-[16px]'>About</p>

        </div>

    </div>
  )
}

export default Block11