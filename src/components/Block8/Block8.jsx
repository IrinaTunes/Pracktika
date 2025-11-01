import React from 'react'
import Bg1Block8 from '../../assets/Bg1Block8.svg'
import Bg2Block8 from '../../assets/Bg2Block8.svg'
import LineBlock8 from '../../assets/LineBlock8.svg'
import Strelka3Block8 from '../../assets/Strelka3Block8.svg'
import Strelka4Block8 from '../../assets/Strelka4Block8.svg'

const Block8 = () => {
  return (
    <div className='mb-[200px]'>
        <div className='relative -z-20'>
          <img src={Bg1Block8} className='absolute w-[894px] h-[993px] top-[-700px] left-[780px]' />
          <img src={Bg2Block8} className='absolute w-[734px] h-[1005px] -left-20 ' />
            
        </div>
        <div className='text-[20px] justify-items-center mt-[170px] font-medium'>
          <p className='text-[#FF2D59]'>Frequently Ask Question</p>
        </div>
        <div className='  text-center text-[42px] font-semibold mt-[15px]'>
          <p className=''>Some of our frequently asked questions</p>
        </div>
        <div className='ml-40 mt-[60px]'>
          <div className=' bg-white block border-2 h-60 w-[1120px] rounded-lg border-[#4C40F7]'>
            <div className='flex'>
              <p className='text-[16px] text-[#111029] pl-8 pt-8 font-medium'>What are the services provided to customers?</p>
              <img src={Strelka3Block8} className='mt-8 ml-[695px]'></img>

            </div>
            <img src={LineBlock8} className='pt-7 pl-8' ></img>
            <div >
              <p className='whitespace-pre-line text-[#6B6B6B] text-[18px] pt-7 pl-8 '>{`Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs,\n develop websites and mobile applications, provide support for the growth of business ideas, to help customers\n market their products online through the marketplace.`} </p>
            </div>
          </div>
        </div>
        <div className='ml-40 mt-8'>
          <div className=' bg-white block border-2 h-[88px] w-[1120px] rounded-lg border-[#D8D8D8]'>
            <p className='text-[16px] text-[#111029] pl-8 pt-8 font-medium'>How can I submit a proposal for cooperation?</p>
            <img src={Strelka4Block8} className='mt-[-25px] ml-[1070px]' ></img>

          </div>
        </div>
        <div className='ml-40 mt-8'>
          <div className=' bg-white block border-2 h-[88px] w-[1120px] rounded-lg border-[#D8D8D8]'>
            <p className='text-[16px] text-[#111029] pl-8 pt-8 font-medium'>I come from a faraway place, can collaboration be done full time online through several meeting applications?</p>
            <img src={Strelka4Block8} className='mt-[-25px] ml-[1070px]' ></img>
          </div>
        </div>
        <div className='ml-40 mt-8'>
          <div className=' bg-white block border-2 h-[88px] w-[1120px] rounded-lg border-[#D8D8D8]'>
            <p className='text-[16px] text-[#111029] pl-8 pt-8 font-medium'>How do I get the payment complete?</p>
            <img src={Strelka4Block8} className='mt-[-25px] ml-[1070px]' ></img>
          </div>
        </div>
        <div className='ml-40 mt-8 '>
          <div className=' bg-white block border-2 h-[88px] w-[1120px] rounded-lg border-[#D8D8D8]'>
            <p className='text-[16px] text-[#111029] pl-8 pt-8 font-medium'>How long can the collaboration last?</p>
            <img src={Strelka4Block8} className='mt-[-25px] ml-[1070px]' ></img>
          </div>
        </div>

    </div>
  )
}

export default Block8