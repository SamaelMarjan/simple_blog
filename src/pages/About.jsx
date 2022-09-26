import React from 'react';

const About = () => {
  return (
    <div id='about'>
      <div className='w-[90%] h-[800px] md:h-[700px] m-auto flex items-center justify-center'>
        <div className='text-center w-[70%] h-[100%]  md:h-[300px] flex flex-col justify-center md:justify-end gap-4'>
          <p className='text-5xl md:text-6xl lg:text-7xl text-[#EBEBEB] font-bold'>Fast and powerful, just like your work</p>
          <p className='text-lg text-[#EBEBEB] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div>
  );
}

export default About;