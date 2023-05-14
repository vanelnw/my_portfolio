import React, { useState } from 'react'
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
        </div>
    </div>
  )
}

export default Archieve