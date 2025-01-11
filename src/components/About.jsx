import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <div className='py-8 px-1 mx-auto'>
            <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
              About
            </p>
          </div>
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Harsh Patel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-[#8892b0]'>"As a dynamic Full Stack Developer, I am dedicated to building secure, high-performance web applications that cater to both individual users and enterprises. With a strong focus on crafting scalable solutions, I aim to enhance user experiences and drive business success through innovative and impactful software development."</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
