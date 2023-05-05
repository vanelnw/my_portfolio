import React from 'react'
import { motion } from 'framer-motion'
import { SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl'
import { TbBrandGithub } from 'react-icons/tb'
import Anime from './Anime'
import { BsArrowDown } from 'react-icons/bs'

const Banner = () => {
  return (
    <motion.section 
      initial={{y:10, opacity:0}} 
      animate={{y:0, opacity:1}} 
      transition={{duration:0.5,delay:0.6}}
      id='home' 
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col-reverse lgl:flex-row gap-10 mdl:px-10 xl:px-4 relative'
    >
      <div className='w-full lgl:w-2/3 flex flex-col gap-8'>
        <h3 className='text-lg font-title-Font tracking-wide text-textGreen'>
            Hi, my name is
        </h3>
        <motion.h1
            initial={{y:10, opacity:0}} 
            animate={{y:0, opacity:1}} 
            transition={{duration:0.5, delay:0.7}}
            className='text-4xl lgl:text-6xl font-titleFont text-[#ccf0ff] font-titleWeight flex flex-col'
        >
            Vanel Nwaba. 
            <span className='title text-2xl md:text-4xl text-textDark mt-2 lgl:mt-4'>I Design and develop expreriences that make people&apos;s life simple..</span>
        </motion.h1>
        <motion.p className='text-base md:max-w-[650px] text-textDark font-medium'>
          As a seasoned software developer, I possess the expertise to help you bring your vision to life. 
          Whether it&apos;s a cutting-edge product, a feature enhancement, or a visually stunning website, 
          I have the skills and experience to make it happen.
        </motion.p>

        <div className='flex gap-4 xl:hidden'>
            <a href='https://github.com/vanelnw' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub />
                </span>
            </a>
            <a href='https://www.linkedin.com/in/va-nw/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin/>
                </span>
            </a>
            <a href='' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialFacebook />
                </span>
            </a>
            <a href='https://twitter.com/VanelNw' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialTwitter/>
                </span>
            </a>
        </div>

        <p className="mb-4 leading-relaxed md:text-xl font-[300]">
            Any idea in mind? Click on &rdquo;<span className='title'>Work With Me</span>&rdquo; to send me a message. Let&apos;s talk!
        </p>

        <div className="flex justify-start">
            <a
              href="#contact"
              className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-sm md:text-lg button hover:bg-green-600 ">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex items-center text-gray-400 border border-[#4ecaff] rounded-3xl py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white text-sm md:text-lg">
              See My Past Work
            </a>
        </div>
      </div>
      <motion.div 
         
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{duration:0.6,delay:1.7}}
      className='w-full flex items-center lgl:w-1/3'>

        <Anime />

      </motion.div>

      <span className="hidden  lgl:inline-flex animate-bounce w-10 h-10 text-xl bg-hoverColor rounded-full  items-center justify-center absolute bottom-2 left-[50%]">
          <BsArrowDown/>
        </span>
    </motion.section>
  )
}

export default Banner