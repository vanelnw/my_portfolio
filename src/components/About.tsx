import React from 'react'
import SectionTitle from './SectionTitle'
import Cube from './Cube'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.section 
        initial={{y:30,opacity:0}} 
        whileInView={{y:0,opacity:1}} 
        transition={{duration:0.5,delay:0.5}}
        id='about' 
        className='max-w-containerSmall mx-auto py-1 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNumber="01"/>
        <div className='flex flex-col lgl:flex-row items-center gap-10'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-3'>
                <p>
                With 3+ years of experience as a web developer, I have honed my skills in both front-end and back-end development. My expertise lies in creating intuitive, user-friendly, and responsive web applications using React and its associated technologies, such as Redux and React Router.
                I also build applications with Ruby on Rails using the Model-View-Controller (MVC) pattern. Additionally, I use RESTful APIs for seamless frontend-backend communication.
                </p>
                <p>
                Throughout my journey as a developer, I&apos;ve had the privilege of working in diverse environments such as <span className='text-textGreen'>start-ups, and non-profit organizations </span> , and collaborated with talented individuals to create digital products for both business and consumer use. My passion for coding and design has enabled me to provide clean code and pixel-perfect designs that meet the highest standards.
                </p>
                <p>
                My specialties include <span className='text-textGreen'> quickly learning new skills and programming languages</span>,
                    <span className='text-textGreen'> problem-solving</span>, <span className='text-textGreen'>responsive design principles</span>, 
                    <span className='text-textGreen'>website optimisation</span>, and 
                    <span className='text-textGreen'> Model-View-Conroller (MVC)</span> methods of organizing code. So far i have 
                    <span className='text-textGreen'> Javascript</span>,<span className='text-textGreen'> HTML</span>, <span className='text-textGreen'>CSS</span>, 
                    <span className='text-textGreen'> C#</span>, <span className='text-textGreen'>Bootstrap</span>, 
                    <span className='text-textGreen'> React</span>, <span className='text-textGreen'> Next.js</span>, <span className='text-textGreen'> Node.js</span>,
                    <span className='text-textGreen'> Ruby</span>, <span className='text-textGreen'>Ruby on Rails </span>
                    and <span className='text-textGreen'>Git/GitHub</span> under my belt. I&apos;ve started learning 
                    <span className='text-textGreen'> PHP</span>, and <span className='text-textGreen'>Laravel</span>.
                    I still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head </p>
                 <p>

                 I&apos;m quietly confident and naturally curious. If you&apos;re looking for someone who can turn your ideas into reality, then look no further! Check out my portfolio to see my work and let&apos;s connect to discuss your project.
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