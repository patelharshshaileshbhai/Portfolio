// import React from 'react';
// import { data } from "../data/data.js";


// const Projects = () => {

//     // projects file
//     const project = data;
//     //setProject(data);
  
//   return (
//     <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8 flex'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
//             Projects
//           </p>
//           <p><a href='https://myprojects-mern-harsh.vercel.app/'> Other Projects</a></p>
//           <p className='py-6'>// Check out some of my recent work</p>
//         </div>

// {/* container for projects */}
// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
//           {/* Gird Item */}
//           {project.map((item, index) => (
//   <div
//     key={index}
//     style={{ backgroundImage: `url(${item.image})` }}
//     className="shadow-lg shadow-[#040c16] group container rounded-md 
//               flex justify-center text-center items-center mx-auto content-div "
//   >
//     {/* Hover effect for images */}
//     <div className="opacity-0 group-hover:opacity-100 ">
//       <span className="text-2xl font bold text-white tracking-wider ">
//         {item.name}
//       </span>
//       <div className="pt-8 text-center ">
//         {/* eslint-disable-next-line */}
//         <a href={item.github} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Code
//           </button>
//         </a>
//         {/* eslint-disable-next-line */}
//         <a href={item.live} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Live
//           </button>
//         </a>
//       </div>
//     </div>
//   </div>
// ))}


// </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import { data } from "../data/data.js";

const Projects = () => {

  // projects file
  const project = data;

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-align-center'>
          {/* Responsive Flexbox: flex-row for large screens, flex-col for mobile */}
          <div className='flex flex-col sm:flex-row justify-between items-center inline p-4'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 align-middle'>
              Projects
            </p>
            <a
              href='https://myprojects-mern-harsh.vercel.app/'
              className='mt-2   sm:mt-0 space-between text-pink-600 hover:text-white transition-all duration-300 underline font-semibold inline' 
            >
              Other Projects
            </a>
          </div>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
