import React from 'react'
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from "react-icons/ai"
import Cube from './Cube'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.section 
        initial={{y:30,opacity:0}} 
        whileInView={{y:0,opacity:1}} 
        transition={{duration:0.6,delay:0.7}}
        id='about' 
        className='max-w-containerSmall mx-auto py-1 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNumber="01"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                I am web developer with 3+ years of experience. 
                I have a strong foundation in front-end & back-end development 
                and am skilled in creating user-friendly and responsive web applications 
                using React and its ecosystem.
                </p>
                <p>
                Since begining of my journey as a developer, I had the privilege of working at <span className='text-textGreen'> an advertising agency, a start-up, non-profit organization </span>, and collaborated with talented people to create digital products for both business and customer use.
                </p>
                <p>
              I&apos;m quietly confident, naturally curious, and
              perpetually working on improving my coding problem at a time. I
              can provide clean code and pixel perfect design. I can olso make
              the more interactive with web animations. check out my portfolio.
                </p>

                <a href='/assets/CV-Nwaba Vanel.pdf' target='_blank'>
                    <motion.button
                        initial={{opacity:0}} 
                        animate={{opacity:1}} 
                        transition={{delay:0.4}}
                        className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen 
                        hover:bg-hoverColor duration-300'
                    >
                        Resume
                    </motion.button>
                </a>
                
            </div>
            <div className='w-full flex items-center justify-center lgl:w-1/3 h-80 relative group'> 
            <div className='bg-animation'>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
               <Cube />
            </div>
        </div>

    </motion.section>
  )
}

export default About