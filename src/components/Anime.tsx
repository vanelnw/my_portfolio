import Image from 'next/image'
import React from 'react'
import image from '../../public/assets/images/linkedin-photo.jpeg'

const Anime = () => {
  return (
    <section id='anime'
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4'
    >
     <div className='w-45 rounded-full h-45 relative flex justify-center items-center group'>
            <div className='w-38 h-38 rounded-full overflow-hidden'>
                <Image className='w-[200px] h-[200px] object-contain z-10 rounded-full border-2 group-hover:scale-110 duration-500 border-textDark'
                src={image}
                alt='my image'
                />
            </div>
            <div className='border-textDark absolute border-[1px] rounded-full h-[170px] w-[170px] --left-5  animate-ping 
          group-hover:animate-none group-hover:border-transparent'></div>
                      <div className='border-textDark absolute border-[1px] rounded-full h-[200px] w-[200px] --left-5  animate-ping 
          group-hover:animate-none group-hover:border-transparent'></div>
          <div className='absolute border border-gray-700 border-l-textGreen border-r-textGreen rounded-full h-[200px] w-[200px] -top-1.2 animate-reverse-spin-slow group-hover:animate-spin-slow'></div>
          <div className='absolute border border-t-textGreen border-b-textGreen border-blue-700 rounded-full h-[220px] w-[220px] -top-1.2 animate-spin-slow group-hover:animate-reverse-spin-slow'></div>
          <div className='absolute border border-t-textGreen border-b-textGreen hover:border--600 border-blue-700 rounded-full h-[240px] w-[240px] -top-1.2 animate-reverse-spin-slow group-hover:animate-spin-slow'></div>
          <div className='absolute border border-t-textGreen border-b-textGreen border-blue-700 rounded-full h-[260px] w-[260px] -top-1.2 animate-spin-slow group-hover:animate-reverse-spin-slow'></div>
     </div>
    </section>
  )
}

export default Anime