import { DiRuby } from 'react-icons/di';
import { FaHtml5, FaCss3, FaReact, FaJsSquare, FaGitAlt } from 'react-icons/fa';

const Cube = () => {
  return (
    <div className="relative w-40 h-40">
      <div className="cubespinner">
        <div className="cubeFace face1 transform translate-z-100">
          <DiRuby className='text-[#DD0031]' />
        </div>
        <div className="cubeFace face2 transform rotate-y-90 translate-z-100">
          <FaHtml5 className='text-[#F06529]' />
        </div>
        <div className="cubeFace face3 transform rotate-y-90 rotate-x-90 translate-z-100">
          <FaCss3 className='text-[#28A4D9]' />
        </div>
        <div className="cubeFace face4 transform rotate-y-180 rotate-z-90 translate-z-100">
          <FaReact className='text-[#5ED4F4]' />
        </div>
        <div className="cubeFace face5 transform -rotate-y-90 rotate-z-90 translate-z-100">
          <FaJsSquare className='text-[#EFD81D]' />
        </div>
        <div className="cubeFace face6 transform -rotate-x-90 translate-z-100">
          <FaGitAlt className='text-[#EC4D28]' />
        </div>
      </div>
    </div>
  );
}


export default Cube