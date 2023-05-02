import React, { useState } from 'react'
import ArchieveCard from './ArchieveCard'
import { motion } from 'framer-motion';
import { projects } from '@/data';
import Project from './Project';

const Archieve = () => {
    const [showMore, setShowMore] = useState(false);

  return (
    <div className='max-w-contentContainer mx-auto px-4 pj-24'>
        <div className='w-full flex flex-col justify-center items-center gap-2'>
            <h2 className='text-3xl font-titleFont font-semibold'>
                Other Noteworthy Projects
            </h2>
            <p className='text-sm font-titleFont text-textGreen'>View the archieve</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>

            {projects.map((project) => (
                <Project key={project.github}  project={project} />
            ))}
            {/* <ArchieveCard />
            <ArchieveCard />
            <ArchieveCard />
            <ArchieveCard />
            <ArchieveCard />
            <ArchieveCard />
            {
                showMore && (
                    <>
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      transition={{delay: 0.1}}
                    >
            <ArchieveCard />
            <ArchieveCard />
            <ArchieveCard />
                    </motion.div>
                    </>
                )
            } */}
        </div>
        {/* <div className='mt-12 flex justify-center'>
            <button 
              className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
              onClick={() => setShowMore(true)}
            >
                Show more
            </button>
        </div> */}
    </div>
  )
}

export default Archieve