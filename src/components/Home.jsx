// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-scroll';

// const Home = () => {

//   const handleClick = () => {
//     // 👇️👇️
//     <Link to='work' smooth={true} duration={500} />
//   }
//   return (
//     <section>
//     <div name='home' className='w-full h-screen bg-[#0a192f]'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//         <p className='text-pink-600'>Hi, my name is</p>
//         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//           Harsh Patel
//         </h1>
//         <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//           I'm a MERN Stack Developer.
//         </h2>
//         <p className='text-[#8892b0] py-4 max-w-[700px]'>
//         "As a MERN stack learner, I'm honing skills to build responsive web apps, focusing on user experience and full-stack development."
//         </p>
//         <div>
//           <button onClick={handleClick} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//             View Work
//             <span className='group-hover:rotate-90 duration-300'>
//               <HiArrowNarrowRight className='ml-3 ' />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default Home;
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <section>
      <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Harsh Patel
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Dynamic Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          "As a dynamic Full Stack Developer, I specialize in building secure, high-performance web applications, leveraging the MERN stack to deliver scalable solutions with a strong focus on user experience and data security."
          </p>
          <div>
            <ScrollLink to='work' smooth={true} duration={500} offset={-100} className='text-white group border-2 px-3 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
