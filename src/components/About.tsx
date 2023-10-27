import React from 'react'
import SectionTitle from './SectionTitle'
import Cube from './Cube'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.section 
        initial={{y:30,opacity:0}} 
        whileInView={{y:0,opacity:1}} 
        transition={{duration:0.3,delay:0.3}}
        id='about' 
        className='max-w-containerSmall mx-auto py-1 lgl:pt-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNumber="01"/>
        <div className='flex flex-col lgl:flex-row items-center gap-10'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-3'>
                <p>
                    With over 3 years of web development experience, I specialize in crafting intuitive, responsive web applications using React, Redux, and Ruby on Rails. I excel at implementing RESTful APIs for seamless frontend-backend communication.
                </p>
                <p>
                    My journey has led me to diverse work environments, from <span className='text-textGreen'>startups to non-profits</span> , where I&apos;ve collaborated on digital products for various audiences. I&apos;m passionate about clean code and pixel-perfect designs, always meeting high standards.
                </p>
                  <p>
                      I have a strong ability to quickly learn new languages and technologies, excel in problem-solving, and focus on responsive design and website optimization. Currently proficient in JavaScript, HTML, CSS, C#, Bootstrap, React, Next.js, Node.js, Ruby, Ruby on Rails, and Git/GitHub, I&apos;m also exploring PHP and Laravel.
                </p>
                 <p>

                 Quietly confident and naturally curious, I&apos;m here to bring your ideas to life. Explore my portfolio to see my work, and let&apos;s connect to discuss your project.
                </p>

                <a href='/assets/Vanel-Nwaba-Resume.pdf' target='_blank'>
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