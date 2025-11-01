import React from 'react'
import RonaldBlock9 from '../../assets/RonaldBlock9.svg'
import StarBlock9 from '../../assets/StarBlock9.svg'
import GuyBlock9 from '../../assets/GuyBlock9.svg'
import KristinBlock9 from '../../assets/KristinBlock9.svg'
import RobertBlock9 from '../../assets/RobertBlock9.svg'
import SavannahBlock9 from '../../assets/SavannahBlock9.svg'
import CourtneyBlock9 from '../../assets/CourtneyBlock9.svg'

const Block9 = () => {
  return (
    <div className='bg-[#F9F9FD] pb-[100px]'>
      <div className='text-[20px] justify-items-center pt-[100px] font-medium'>         
        <p className='text-[#FF2D59]'>Testimonials</p>
      </div>
      <div className='  text-center text-[42px] font-semibold'>
        <p className=''>Some testimonials from our customers</p>
      </div>
      <div className='flex ml-40 mt-[120px]'>
        <div className='bg-white w-[352px] h-[357px] shadow-[-15px_20px_70px_0px_rgba(76,64,247,0.2)] rounded-[20px] justify-items-center'>
          <img src={RonaldBlock9} className='mt-[-70px]'></img>
          <p className='text-[#111029] text-[24px] font-semibold mt-[-15px]'>Ronald Richards</p>
          <p className='text-[#ABAFC7] text-[16px] font-normal mt-2'>Google inc.</p>
          <p className='whitespace-pre-line text-[#70798B] text-[18px] font-normal mt-6 '>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
          <img src={StarBlock9} className='mt-6'></img>
        </div>
        <div className='bg-[#FFFFFF] w-[352px] h-[357px] rounded-[20px] justify-items-center ml-8'>
          <img src={GuyBlock9} className='mt-[-60px]'></img>
          <p className='text-[#111029] text-[24px] font-semibold mt-8'>Guy Hawkins</p>
          <p className='text-[#ABAFC7] text-[16px] font-normal mt-2'>Paypal inc.</p>
          <p className='whitespace-pre-line text-[#70798B] text-[18px] font-normal mt-6 '>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
          <img src={StarBlock9} className='mt-6'></img>
        </div>
        <div className='bg-[#FFFFFF] w-[352px] h-[357px] rounded-[20px] justify-items-center ml-8'>
          <img src={KristinBlock9} className='mt-[-60px]'></img>
          <p className='text-[#111029] text-[24px] font-semibold mt-8'>Kristin Watson</p>
          <p className='text-[#ABAFC7] text-[16px] font-normal mt-2'>Microsoft inc.</p>
          <p className='whitespace-pre-line text-[#70798B] text-[18px] font-normal mt-6 '>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
          <img src={StarBlock9} className='mt-6'></img>
        </div>
        
      </div>
      <div className='flex '>
        <div className='bg-[#FFFFFF] w-[352px] h-[357px] rounded-[20px] justify-items-center ml-40 mt-[120px]'>
          <img src={RobertBlock9} className='mt-[-60px]'></img>
          <p className='text-[#111029] text-[24px] font-semibold mt-8'>Robert Fox</p>
          <p className='text-[#ABAFC7] text-[16px] font-normal mt-2'>Facebook inc.</p>
          <p className='whitespace-pre-line text-[#70798B] text-[18px] font-normal mt-6 '>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
          <img src={StarBlock9} className='mt-6'></img>
        </div>
        <div className='bg-[#FFFFFF] w-[352px] h-[357px] rounded-[20px] justify-items-center ml-8 mt-[120px]'>
          <img src={SavannahBlock9} className='mt-[-60px]'></img>
          <p className='text-[#111029] text-[24px] font-semibold mt-8'>Savannah Nguyen</p>
          <p className='text-[#ABAFC7] text-[16px] font-normal mt-2'>Twitter inc.</p>
          <p className='whitespace-pre-line text-[#70798B] text-[18px] font-normal mt-6 '>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
          <img src={StarBlock9} className='mt-6'></img>
        </div>
        <div className='bg-[#FFFFFF] w-[352px] h-[357px] rounded-[20px] justify-items-center ml-8 mt-[120px]'>
          <img src={CourtneyBlock9} className='mt-[-60px]'></img>
          <p className='text-[#111029] text-[24px] font-semibold mt-8'>Courtney Henry</p>
          <p className='text-[#ABAFC7] text-[16px] font-normal mt-2'>Apple inc.</p>
          <p className='whitespace-pre-line text-[#70798B] text-[18px] font-normal mt-6 '>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
          <img src={StarBlock9} className='mt-6'></img>
        </div>

      </div>

    </div>
  )
}

export default Block9