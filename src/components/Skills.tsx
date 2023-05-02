import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import {FaTools,FaLaptopCode} from "react-icons/fa"
import {AiOutlineCode} from "react-icons/ai"
import HTML from "../../public/assets/images/html.png";
import css from "../../public/assets/images/css.png";
import js from "../../public/assets/images/javascript.png";
import react from "../../public/assets/images/react.png";
import node from "../../public/assets/images/node.png";
import ruby from "../../public/assets/images/ruby.jpeg";
import rails from "../../public/assets/images/rails.png";
import Wd from "../../public/assets/images/wd.png";
import vc from "../../public/assets/images/vc.png";
import db from "../../public/assets/images/db.png";
import api from "../../public/assets/images/api.png";

const languages = [  {
  id: "1",
  subtitle: "HTML",
  icon: HTML,
},
{
  id: "2",
  subtitle: "CSS",
  icon: css,
},
{
  id: "3",
  subtitle: "Javascript",
  icon: js,
},
{
  id: "4",
  subtitle: "ruby",
  icon: ruby,
},]

const frameworks = [
  {
    id: "1",
    subtitle: "React js",
    icon: react,
  },
  {
    id: "2",
    subtitle: "Node js",
    icon: node,
  },
  {
    id: "3",
    subtitle: "Ruby On Rails",
    icon: rails,
  },
]

const skills = [

  {
    id: "1",
    subtitle: "Database Management",
    icon: db,
  },
  {
    id: "2",
    subtitle: "Version Control",
    icon: vc,
  },

  {
    id: "3",
    subtitle: "API Design",
    icon: api,
  },
  {
    id: "4",
    subtitle: "Web Development",
    icon: Wd,
  },
];

const Skills = () => {
  return (
    <div id='skills' className='max-w-containerSmall mx-auto py-24 lgl:py-32 flex flex-col gap-8'>
       <SectionTitle title="Skills" titleNumber="03"/>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:px-10'>
       <div className='w-full h-auto rounded-lg bg-[rgba(51,194,255,8%)] hover:bg-[#033b51] p-5 flex flex-col items-center gap-9'>
       <div className='w-full flex gap-5 justify-center items-center'>
                <AiOutlineCode className='text-5xl text-textGreen'/>
                <span className='text-2xl md:text-3xl'>Languages</span>
            </div>
            <div className="flex gap-5 flex-wrap skills-content ">
            {languages?.map((skill, i) => (
                <div className="w-[45%] md:w-full flex gap-2 items-center p-1 bg-snow justify-between rounded-lg shadow-md  hover:scale-110
                " key={i}>
                  <Image src={skill.icon} alt={skill.subtitle} className='w-[40px] h-[40px]' />
                  <h3>{skill.subtitle}</h3>
                </div>
              ))}
            </div>
        </div>

        <div className='w-full h-auto rounded-lg bg-[rgba(51,194,255,8%)] hover:bg-[#033b51] p-5 flex flex-col items-center gap-9'>
            <div className='w-full flex gap-5 justify-center items-center'>
            <FaLaptopCode className='text-5xl text-textGreen'/>
            <span className='text-2xl md:text-3xl'>Frameworks</span>
            </div>
            <div className="flex gap-5 flex-wrap skills-content ">
            {frameworks?.map((skill, i) => (
                <div className="w-[45%] md:w-full flex gap-2 items-center p-1 bg-snow justify-between rounded-lg shadow-md  hover:scale-110
                " key={i}>
                  <Image src={skill.icon} alt={skill.subtitle} className='w-[40px] h-[40px]' />
                  <h3>{skill.subtitle}</h3>
                </div>
              ))}
            </div>
        </div>

        <div className='w-full h-auto rounded-lg bg-[rgba(51,194,255,8%)] hover:bg-[#033b51] p-5 flex flex-col items-center gap-9'>
            <div className='w-full flex gap-5 justify-center items-center'>
                <FaTools className='text-5xl text-textGreen'/>
                <span className='text-2xl md:text-3xl'>Tools</span>
            </div>
            <div className="flex gap-5 flex-wrap skills-content ">
            {skills?.map((skill, i) => (
                <div className="w-[45%] md:w-full flex gap-2 items-center p-1 bg-snow justify-between rounded-lg shadow-md  hover:scale-110
                " key={i}>
                  <Image src={skill.icon} alt={skill.subtitle} className='w-[40px] h-[40px]' />
                  <h3>{skill.subtitle}</h3>
                </div>
              ))}
            </div>
        </div>
       </div>
    </div>
  )
}

export default Skills