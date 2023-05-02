import React from 'react'
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';

const Footer = () => {
  return (
    <div className="app__footer bg-[#112240] text-white py-8 px-6 md:py-12 md:px-8">
    <div className="footer-container max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
      <div className="about group md:text-center">
        <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white">
          Vanel Nwaba
        </h2>
        <p className="text-base font-light ">FullStack Developer</p>
      </div>
        <ul className="flex gap-x-4">
          <li>
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>

      <div className='flex gap-4'>
            <a href='' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub />
                </span>
            </a>
            <a href='' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialYoutube />
                </span>
            </a>
            <a href='' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin/>
                </span>
            </a>
            <a href='' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialFacebook />
                </span>
            </a>
            <a href='' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialInstagram />
                </span>
            </a>
        </div>
        <div className="w-full pt-5 text-center border-t-2 border-textGreen xl:w-[90%] footer-copyright">
      <p className="text-base font-light">&copy; 2023 All Rights Reserved</p>
    </div>
    </div>

  </div>
  )
}

export default Footer