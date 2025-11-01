import React from 'react'
import Amazon from '../../assets/Amazon.svg'
import Jeep from '../../assets/Jeep.svg'
import Careem from '../../assets/Careem.svg'
import Hubspot from '../../assets/Hubspot.svg'
import Jquery from '../../assets/Jquery.svg'
import Canon from '../../assets/Canon.svg'
import Fedex from '../../assets/Fedex.svg'
import Bitcoin from '../../assets/Bitcoin.svg'
import Pirelli from '../../assets/Pirelli.svg'
import Philips from '../../assets/Philips.svg'

const Block6 = () => {
  return (
    <div>
        <div className='text-[20px] justify-items-center mt-[170px] font-medium'>
            <p className='text-[#FF2D59]'>Some of Our Great Customers</p>
        </div>
        <div className='  text-center text-[42px] font-semibold mt-[15px]'>
            <p className=''>Some of the companies we have worked with</p>
        </div>
        <div className='flex mt-20 justify-center-safe'>
            <img src={Amazon} className='mr-[30px] w-[116px] h-[35px]'></img>
            <img src={Jeep} className='mr-[30px] w-[87px] h-[35px]'></img>
            <img src={Careem} className='mr-[30px] w-[170px] h-[35px]'></img>
            <img src={Hubspot} className='mr-[30px] w-[120px] h-[35px]'></img>
            <img src={Jquery} className='mr-[30px] w-[154px] h-[35px]'></img>
        </div>
        <div className='flex mt-[60px] justify-center-safe'>
            <img src={Canon} className=''></img>
            <img src={Fedex} className=''></img>
            <img src={Bitcoin} className=''></img>
            <img src={Pirelli} className=''></img>
            <img src={Philips} className=''></img>
        </div>


    </div>
  )
}

export default Block6