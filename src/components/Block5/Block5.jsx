import React from 'react'
import Vector from '../../assets/Vector.svg'
import FrontWorkingSpace from '../../assets/FrontWorkingSpace.svg'
import MeetingCorner from '../../assets/MeetingCorner.svg'
import GuestMeetingRoom from '../../assets/GuestMeetingRoom.svg'
import GuestRestRoom from '../../assets/GuestRestRoom.svg'
import SingleWorkingSpace from '../../assets/SingleWorkingSpace.svg'
import KitchenRoom from '../../assets/KitchenRoom.svg'


const Block5 = () => {
  return (
    <div>
        <div className='relative -z-20'>
            <img src={Vector} className='absolute w-full top-[580px]' />
            <img src={Vector} className='absolute w-full top-[120px]' />
            
        </div>
        <div className='text-[20px] justify-items-center mt-[170px] font-medium'>
            <p className='text-[#FF2D59]'>Working space</p>
        </div>
        <div className='  text-center text-[42px] font-semibold'>
            <p className=''>Let’s meet our interior room decoration</p>
        </div>
        <div className='flex mt-[60px]'>
            <div>
                <img src={FrontWorkingSpace} className='ml-40 '></img>
                <p className='mt-[-45px] ml-[180px] text-white'>Front working space</p>
            </div>
            <div>
                <img src={MeetingCorner} className='ml-8'></img>
                <p className='mt-[-45px] ml-[50px] text-white'>Meeting corner</p>

            </div>
            <div>
                <img src={GuestMeetingRoom} className='ml-8'></img>
                <p className='mt-[-45px] ml-[50px]  text-white'>Guest meeting room</p>

            </div>

        </div>
        <div className='flex mt-[75px]'>
            <div>
                <img src={GuestRestRoom} className='ml-40 mt-[-155px]'></img>
                <p className='mt-[-45px] ml-[180px] text-white'>Guest rest room</p>
            </div>
            <div>
                <img src={SingleWorkingSpace} className='ml-8 mt-[-25px]'></img>
                <p className='mt-[-45px] ml-[50px] text-white'>Single working space</p>

            </div>
            <div>
                <img src={KitchenRoom} className='ml-8 mt-[-105px]'></img>
                <p className='mt-[-45px] ml-[50px] text-white'>Kitchen room</p>

            </div>

        </div>
    </div>
  )
}

export default Block5