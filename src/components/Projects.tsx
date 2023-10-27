import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import {TbBrandGithub} from 'react-icons/tb';
import {RxOpenInNewWindow} from 'react-icons/rx';
import {projects} from '../data'

const Projects = () => {

  return (
    <section id='projects' className='max-w-contentContainer mx-auto lgl:px-10 py-24'>
        <SectionTitle title="Some Things I have Built" titleNumber="03"/>
        <div className='w-full flex flex-col items-center justify-centre gap-20 mt-10'>
        
        {
            projects.map((project) => (
                <div key={project.id} className='w-full flex flex-col items-center justify-center gap-20 mt-10'>
                <div className={project.id % 2 ? ' w-full flex flex-col lg:flex-row gap-6' : ' w-full flex flex-col lg:flex-row-reverse gap-6'}>
                  <a className='w-full lg:w-1/2 relative group' href='https://google.com' target='_blank'>
                      <Image 
                       className='w-full h-full object-contain'
                       src={project.image}
                       alt='project1'
                      />
                  </a>
                  <div className='w-full lg:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right  z-10'>
                      <div>
                      <p className='font-textFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                      <h3 className='text-2xl font-bold'>{project.title}</h3>
                      </div>
                      <p className={project.id % 2 ?'bg-[#112240] text-sm md:text-base p-2  md:p-6 rounded-md lg:-ml-16' : 'bg-[#112240] text-sm md:text-base p-2  md:p-6 rounded-md lg:-mr-16' }>
                        {project.description}
                      </p>
                      <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-end text-textDark'>
                        {project.stacks.map((stack) => (<li key={stack}>{stack}</li>))}
                      </ul>
                      <div className='flex gap-4 text-2xl'>
                          <a href={project.github}  
                          className='hover:text-textGreen duration-300'
                          >
                              <TbBrandGithub/>
                          </a>
                          <a href={project.link}
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                          >
                              <RxOpenInNewWindow/>
                          </a>
                      </div>
                  </div>
                </div>
              </div>
            ))
        }
        </div>
    </section>
  )
}

export default Projects