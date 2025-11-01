import React from 'react'
import Vector from '../../assets/Vector.svg'
import Ideate from '../../assets/Ideate.svg'
import Design from '../../assets/Design.svg'
import StrelkaBlock2 from '../../assets/StrelkaBlock2.svg'
import Web from '../../assets/Web.svg'
import App from '../../assets/App.svg'
import Business from '../../assets/Business.svg'
import Digital from '../../assets/Digital.svg'

const Block2 = () => {
  return (
    <div className='  text-black'>
      <div className='relative -z-20'>
        <img src={Vector} className='absolute w-full top-[580px]' />
      </div>
      <div className='text-[20px] justify-items-center mt-[170px] font-medium'>
        <p className='text-[#FF2D59]'>Our Services</p>
      </div>
      <div className='  text-center text-[42px] font-semibold'>
        <p className='whitespace-pre-line'>{`The various services we provide to make your\n business more powerful`}</p>
      </div>
      <div className='mt-[60px] flex justify-start'>
        <div className=' bg-[#4C40F7] rounded-2xl ml-48  pt-[30px] shadow-[-10px_30px_70px_0px_rgba(76,64,247,0.5)] p-11 gap-11 h-[458px] w-[352px]'>
          <img src={Ideate} className='pl-[55px]'/>
          <div className='text-white text-center'>
            <p className='text-[20px] mb-4 font-semibold'>Ideate</p>
            <p className='whitespace-pre-line text-[18px] font-extralight'>{`We help you develop creative\n ideas so that your business can\n grow more rapidly`}</p>
            <div className='pl-[110px] pt-11'>
              <div className='bg-[#ffffff] w-[45px] h-[45px] rounded-3xl'>
                <img src={StrelkaBlock2} className='pl-[17px] pt-[17px]'/>
              </div>
            </div>

          </div>
        </div>
        <div className=' bg-white rounded-2xl   pt-[30px] shadow-[-10px_30px_70px_0px_rgba(219,222,225,0.4)] p-11 gap-11 h-[458px] w-[352px]'>
          <div>
            <img src={Design} className='pl-[55px]'/>
            <div className='text-black text-center'>
              <p className='text-[20px] mb-4 font-semibold'>Design</p>
              <p className='whitespace-pre-line text-[18px] font-extralight'>{`We provide services with the\n best designs than our designer\n team for your business`}</p>
              <div className='pl-[110px] pt-11'>
                <div className='bg-[#F3F4F6] w-[45px] h-[45px] rounded-3xl'>
                  < img src={StrelkaBlock2} className='pl-[17px] pt-[17px]'/>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <div className=' bg-white rounded-2xl   pt-[30px] shadow-[-10px_30px_70px_0px_rgba(219,222,225,0.4)] p-11 gap-11 h-[458px] w-[352px]'>
          <div>
            <img src={Web} className='pl-[55px]'/>
            <div className='text-black text-center'>
              <p className='text-[20px] mb-4 font-semibold'>Web Development</p>
              <p className='whitespace-pre-line text-[18px] font-extralight'>{` We help develop company\n websites to be more\n professional and attractive`}</p>
              <div className='pl-[110px] pt-11'>
                <div className='bg-[#F3F4F6] w-[45px] h-[45px] rounded-3xl'>
                  < img src={StrelkaBlock2} className='pl-[17px] pt-[17px]'/>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>




      <div className='mt-[60px] flex justify-start'>
        <div className=' bg-white rounded-2xl ml-48  pt-[30px] shadow-[-10px_30px_70px_0px_rgba(219,222,225,0.4)] p-11 gap-11 h-[458px] w-[352px]'>
          <img src={App} className='pl-[55px]'/>
          <div className='text-black text-center'>
            <p className='text-[20px] mb-4 font-semibold'>App Development</p>
            <p className='whitespace-pre-line text-[18px] font-extralight'>{`We help develop company\n mobile apps to be more\n professional and attractive`}</p>
            <div className='pl-[110px] pt-11'>
              <div className='bg-[#F3F4F6] w-[45px] h-[45px] rounded-3xl'>
                <img src={StrelkaBlock2} className='pl-[17px] pt-[17px]'/>
              </div>
            </div>

          </div>
        </div>
        <div className=' bg-white rounded-2xl   pt-[30px] shadow-[-10px_30px_70px_0px_rgba(219,222,225,0.4)] p-11 gap-11 h-[458px] w-[352px]'>
          <div>
            <img src={Business} className='pl-[55px]'/>
            <div className='text-black text-center'>
              <p className='text-[20px] mb-4 font-semibold'>Business Growth</p>
              <p className='whitespace-pre-line text-[18px] font-extralight'>{`We also provide services by\n providing input for your\n business growth`}</p>
              <div className='pl-[110px] pt-11'>
                <div className='bg-[#F3F4F6] w-[45px] h-[45px] rounded-3xl'>
                  < img src={StrelkaBlock2} className='pl-[17px] pt-[17px]'/>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <div className=' bg-white rounded-2xl   pt-[30px] shadow-[-10px_30px_70px_0px_rgba(219,222,225,0.4)] p-11 gap-11 h-[458px] w-[352px]'>
          <div>
            <img src={Digital} className='pl-[55px] '/>
            <div className='text-black text-center'>
              <p className='text-[20px] mb-4 font-semibold'>Digital marketing</p>
              <p className='whitespace-pre-line text-[18px] '>{` We also help you market your\n products through an online\n marketplace`}</p>
              <div className='pl-[110px] pt-11'>
                <div className='bg-[#F3F4F6] w-[45px] h-[45px] rounded-3xl'>
                  < img src={StrelkaBlock2} className='pl-[17px] pt-[17px]'/>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Block2