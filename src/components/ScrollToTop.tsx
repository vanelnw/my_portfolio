import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTop = () => {
    const [show, setShow] = useState(true);
    const showOnScroll = () => {
      if (window.scrollY >= 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", showOnScroll);
    }
   
  return (
    <div className="scrollToTop-content fixed bottom-6 right-20 p-[20px]">
    <a
      href="#home"
      className={
        show
          ? "scrollToTop-btn app__flex active"
          : "scrollToTop-btn app__flex"
      }
    >
      <AiOutlineArrowUp />
    </a>
  </div>
  )
}

export default ScrollToTop