import React from 'react';

const Contacts = () => {
  return (
    <>
      <div id='contacts'>
        <div className='w-[90%] h-[100%] md:h-[500px] m-[auto] mt-10 flex flex-col justify-center items-center gap-[20px]'>
          <div className='w-[90%] h-[65px] flex items-center justify-center'>
            <p>Nulla commodo aliqua aliqua ut</p>
          </div>
          <div className='w-[100%] flex flex-col md:flex-row items-center justify-center gap-10'>
            <div className='bg-[#EDEDED] w-[100%] md:w-[450px] h-[200px] md:h-[350px] text-black flex items-center justify-center'>
              Image/Text
            </div>
            <div className='bg-[#EDEDED] w-[100%] md:w-[450px] h-[200px] md:h-[350px] text-black flex items-center justify-center'>
              Image/text
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;