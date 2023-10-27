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

const clientsData = [
	[{ name: 'javascript',icon:js }],
	[{ name: 'php',icon:css }, { name:'ruby',icon:HTML }],
	[{ name: 'React',icon:react }, { name: 'rails', icon:rails }, { name: 'laravel', icon:node}],
	[{ name: 'GIT',icon:vc }, { name: 'netflix',icon:db }],
	[{ name: 'facebook',icon:api }],
];

const Skills = () => {
  return (
    <div id='skills' className='max-w-containerSmall mx-auto py-24 lgl:py-32 flex flex-col gap-8 '>
       <SectionTitle title="Skills" titleNumber="03"/>
    
      
      <div className="relative mx-auto">
        <div className="w-full max-w-[1300px] mx-auto p-[30px] md:px-0 lg:p-[50px]">

				<div className='flex flex-col items-center justify-center md:flex-row'>
					{clientsData.map((clients, clientsIndex) => (
						<div className='flex flex-col justify-center items-center m-[.4rem]' key={clientsIndex}>
							{clients.map((el, index) => (
								<div className='py-[6px] px-[30px] lg:py-[10px] lg:px-[40px] text-black rounded-2xl h-[110px] w-full shadow-md bg-[#fafeff] m-[.4rem] flex items-center justify-center transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out' key={index}>
                  {/* <ClientImage src={`./images/companies/${el.name}.svg`} /> */}
                  {el.name}
                  <Image src={el.icon} alt={el.name} className='w-[40px] h-[40px]' />
								</div>
							))}
						</div>
					))}
				</div>
        </div>
      </div>

    </div>
  )
}


export default Skills