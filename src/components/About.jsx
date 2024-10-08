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
              <p className='text-[#8892b0]'>"As a MERN stack learner, I'm passionate about crafting impactful web applications. From individual users to large enterprises, I aim to enhance experiences through software development.With a focus on MERN stack, I aspire to create scalable solutions that positively impact users' lives and drive business success."</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
