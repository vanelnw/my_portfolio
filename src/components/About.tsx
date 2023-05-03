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
                With over three years of experience as a web developer, I have honed my skills in both front-end and back-end development. My expertise lies in creating intuitive, user-friendly, and responsive web applications using React and its associated ecosystem.
                In addition, I also have experience working with Ruby on Rails, a popular web application framework. 
                </p>
                <p>
                Throughout my journey as a developer, I&apos;ve had the privilege of working in diverse environments such as  <span className='text-textGreen'>  advertising agencies, start-ups, and non-profit organizations </span>,and collaborated with talented individuals to create digital products for both business and consumer use.
                My passion for coding and design has enabled me to provide clean code and pixel-perfect designs that meet the highest standards.
                </p>
                <p>
                I&apos;m quietly confident, naturally curious, and perpetually working on improving my coding skills, one problem at a time. If you&apos;re looking for someone who can turn your ideas into reality, then look no further! Check out my portfolio to see my work and let&apos;s connect to discuss your project.
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