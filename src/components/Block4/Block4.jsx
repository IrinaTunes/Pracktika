import React from 'react'
import imgBlock4 from '../../assets/imgBlock4.svg'

const Block4 = () => {
  return (
    <div className='bg-[#F9F9FD] mt-[100px] '>
        <div className='flex'>
            <div className=' '>
                <div className='bg-[#FFFFFF] shadow-[0px_25px_100px_0px_rgba(76,64,247,0.08)] h-[300px] w-[270px] rounded-[20px] mt-[155px] ml-40'>
                    <p className='text-[56px] font-semibold text-center text-[#4C40F7] pt-[55px] pb-5'>70K+</p>
                    <p className='whitespace-pre-line text-center text-[18px] font-extralight'>{`We have more than\n customers`}</p>
                </div>
                <div className='bg-[#FFFFFF] shadow-[0px_25px_100px_0px_rgba(76,64,247,0.08)] h-[300px] w-[270px] rounded-[20px] mt-[50px] ml-40'>
                    <p className='text-[56px] font-semibold text-center text-[#FF2D59] pt-[55px] pb-5'>10M+</p>
                    <p className='whitespace-pre-line text-center text-[18px] font-extralight'>{`People who are helped\n because of our hard\n work`}</p>
                </div>
            </div>
            <div className=''>
                <div className='bg-[#FFFFFF] shadow-[0px_25px_100px_0px_rgba(76,64,247,0.08)] h-[300px] w-[270px] rounded-[20px] ml-10 mt-[105px]'>
                    <p className='text-[56px] font-semibold text-center text-[#FF6800] pt-[55px] pb-5'>100K+</p>
                    <p className='whitespace-pre-line text-center text-[18px] font-extralight'>{`Projects we have\n completed`}</p>
                </div>
                <div className='bg-[#FFFFFF] shadow-[0px_25px_100px_0px_rgba(76,64,247,0.08)] h-[300px] w-[270px] rounded-[20px] ml-10 mt-[50px]'>
                    <p className='text-[56px] font-semibold text-center text-[#4ADB61] pt-[55px] pb-5'>200+</p>
                    <p className='whitespace-pre-line text-center text-[18px] font-extralight text-[#111029]'>{` Support from world-\n renowned companies`}</p>
                </div>
            </div>
            <div className='ml-20 mt-[100px]'>
                <p className='whitespace-pre-line text-[#111029] text-[56px] font-semibold'>{`Customer\n satisfaction is\n our first priority`} </p>
                <p className='whitespace-pre-line text-[#6B6B6B] text-[18px] font-extralight mt-[35px]'>{`We serve many customers, ranging from small\n businesses, medium entrepreneurs, to world-\n renowned companies. Their satisfaction is our\n pleasure. We strive to provide the best service by:`}</p>
                <div className='flex mt-[35px]'>
                    <img src={imgBlock4} className=''></img>
                    <p className='ml-6 text-[18px] text-[#6B6B6B] font-extralight'>Provide idea support from our creative team</p>
                </div>
                 <div className='flex mt-4'>
                    <img src={imgBlock4} className=''></img>
                    <p className='whitespace-pre-line ml-6 text-[18px] text-[#6B6B6B] font-extralight'>{`Provide attractive and professional design\n services`}</p>
                </div>
                 <div className='flex mt-4'>
                    <img src={imgBlock4} className=''></img>
                    <p className='ml-6 text-[18px] text-[#6B6B6B] font-extralight'>Support for service 24 hours a week</p>
                </div>
                 <div className='flex mt-4'>
                    <img src={imgBlock4} className=''></img>
                    <p className='ml-6 text-[18px] text-[#6B6B6B] font-extralight'>Helping our customers to grow their business</p>
                </div>
                 <div className='flex mt-4 mb-[100px]'>
                    <img src={imgBlock4} className=''></img>
                    <p className='whitespace-pre-line ml-6 text-[18px] text-[#6B6B6B] font-extralight'>{`Provide support to market products through\n online marketplace `} </p>
                </div>
                


            </div>

        </div>
        

    </div>
  )
}

export default Block4