import React from 'react';

const About = () => {
  return (
    <>
      <div id='about'>
        <div className='w-[90%] h-[600px] md:h-[700px] m-auto flex items-center justify-center'>
          <div className='md:text-center w-[85%] md:w-[70%] h-[100%]  md:h-[300px] flex flex-col justify-center md:justify-end gap-4'>
            <p className='text-5xl md:text-6xl lg:text-7xl text-[#EBEBEB] font-bold'>Fast and powerful, just like your work</p>
            <p className='text-lg text-[#EBEBEB] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
      <div className='w-[90%] h-[100%] md:h-[550px] m-auto flex flex-col md:flex-row items-center gap-10'>
        <div className='w-[100%] md:w-[50%] h-[100%] md:h-[550px] flex flex-col md:justify-center md:items-center gap-4 md:gap-2'>
          <div className='w-[100%] md:w-[550px] h-[100%] md:h-[120px]'>
            <p className='w-[100%] h-[100%] font-bold text-2xl md:text-5xl text-[#EDEDED]'>Nulla commodo aliqua aliqua ut</p>
          </div>
          <div className='w-[100%] md:w-[550px] h-[200px] md:h-[120px] flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='w-[100%] md:w-[50%] h-[100px] md:h-[100%] flex flex-col justify-between'>
              <p className='w-[100%] h-[100%] text-[#EBEBEB] text-base font-semibold'>
                Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit
              </p>
              <a href='a' className='text-[#EBEBEB] text-lg font-bold flex justify-center md:justify-start'>Read more</a>
            </div>
            <div className='w-[100%] md:w-[50%] h-[100px] md:h-[100%] flex flex-col justify-between'>
              <p className='w-[100%] h-[100%] text-[#EBEBEB] text-base font-semibold'>
                Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit
              </p>
              <a href='a' className='text-[#EBEBEB] text-lg font-bold flex justify-center md:justify-start'>Read more</a>
            </div>
          </div>
        </div>
        <div className='w-[100%] md:w-[50%] h-[350px] md:h-[550px] bg-[#F5F5FF] flex items-center justify-center rounded'>
          <p className='text-black'>Image</p>
        </div>
      </div>
    </>
  );
}

export default About;