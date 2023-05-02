import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import contactImg from '../../public/assets/images/contactImg.8ddfbfd11798f881db54.png'
import { SlSocialTwitter, SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs.sendForm('service_0jdd3ki', 'template_3tvmwpe', currentForm, 'xjW8p6Ou9w63cxU25')
      .then((result) => {
          console.log(result.text);
          alert('Message successfully sent!')
          // window.location.reload()
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again')
      });
  };

  return (
    <section id='contact'
    //className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4'
    className='max-w-contentContainer mx-auto lgl:px-10 py-24'
    >
      <SectionTitle title="Contact Me" titleNumber="04"/>
      <div className="px-5 py-2 mt-4 mx-auto flex gap:5 justify-between mdl:flex-nowrap flex-wrap">
        <div className="w-full lgl:w-[40%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-2 lgl:p-2 mb-8 lgl:mb-0 rounded-lg shadow-shadowOne flex flex-col gap-8 lg:gap-5 justify-center">

          <div className='w-full h-60 object-cover rounded-lg mb-1'>
             <Image src={contactImg} alt='contact' className='w-full h-60 object-cover rounded-lg mb-2'/>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-white'>
              Vanel Nwaba
            </h3>
            <p className='text-lg font-normal text-gray-400'>
              Full Stack Web Developper
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>
              Phone: <span>+237 674963858</span>
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>
              Email: <span>vanelnwaba@gmail.com</span>
            </p>
          </div>
          <div className='flex flex-col gap-4'>
             <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
             <div className='flex gap-4'>

             <a href='https://github.com/vanelnw' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialGithub />
                </span>
            </a>
            <a href='https://www.linkedin.com/in/va-nw/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin/>
                </span>
            </a>
            <a href='https://twitter.com/VanelNw' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialTwitter />
                </span>
            </a>

             </div>
          </div>
        </div>

        <form
          ref={form} onSubmit={sendEmail}
          // action="https://formspree.io/f/xyyvwalr" method="POST"
          name="contact"
          className="w-full lgl:w-[60%] h-full flex flex-col gap-3 mdl:pl-4 rounded-lg shadow-shadowOne mt-2">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-2">
            Feel free for sending me a message. Any idea in mind? Let s talk!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg button">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact