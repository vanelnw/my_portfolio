import React from 'react'
// import { CodeIcon } from "@heroicons/react/solid";
import {TfiWorld} from "react-icons/tfi"
import { FiGithub } from "react-icons/fi";
import IconButton from "./IconButton";
import Image from 'next/image';

const Project = ({project}:any) => {

  return (
    <>
    </>
  //   <div
  //   key={project.image}
  //   className="w-full h-auto rounded-lg bg-[#112240] p-7">
  //   <div className="flex relative">
  //     <Image
  //       alt="gallery"
  //       className="absolute inset-0 w-full h-full object-cover object-center"
  //       src={require('../../public/assets/images/' + project.image + '.png')}
  //     />
  //     <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
  //       <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
  //         {project.subtitle}
  //       </h2>
  //       <h1 className="title-font text-lg font-medium text-white mb-3">
  //         {project.title}
  //       </h1>
  //       <p className="leading-relaxed">{project.description}</p>
  //     </div>
  //   </div>
  //   <div className="pt-2 text-green-500 font-bold flex items-center flex-row justify-center flex-wrap gap-2">
  //     <span className="border border-green-500 rounded-lg p-2">{project.stack[0]}</span>
  //     <span className="border border-green-500 rounded-lg p-2">{project.stack[1]}</span>
  //     <span className="border border-green-500 rounded-lg p-2">{project.stack[2]}</span>
  //   </div>
  //   <div className="flex justify-center mt-2">
  //     <a
  //       href={project.link}
  //       target="_blank"
  //       rel="noreferrer"
  //       className="inline-flex text-white border-0 focus:outline-none rounded text-lg">
  //       <IconButton text="Link" color="bg-green-500">
  //         <TfiWorld/>
  //       </IconButton>
  //     </a>
  //     <a
  //       href={project.github}
  //       target="_blank"
  //       rel="noreferrer"
  //       className="ml-4 inline-flex text-gray-400 border-0 focus:outline-none hover:text-white rounded text-lg">
  //       <IconButton text="Github" color="bg-gray-700">
  //         <FiGithub/>
  //       </IconButton>
  //     </a>
  //   </div>
  // </div>
  )
}

export default Project