import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='top-0 w-[100%] h-[70px]'>
        <div className='w-[90%] md:w-[90%] h-[100%] m-auto flex items-center justify-between'>
          <div>
            <div className='w-[30px] h-[30px] bg-[#C4C4C4]'></div>
          </div>
          <div className=' md:visible flex gap-2 md:gap-4 p-2 text-[#EBEBEB] text-xs md:text-base font-normal md:font-semibold'>
            <a href='#about' className='flex items-center justify-center w-[57px] h-[24px]'>About</a>
            <a href='#product' className='flex items-center justify-center w-[57px] h-[24px]'>Product</a>
            <a href='#contacts' className='flex items-center justify-center w-[65px] h-[24px]'>Contacts</a>
          </div>
          <div className='bg-[#423F3E] rounded px-4 py-2'>
            <a href='a' className='font-normal md:font-bold text-lg'>Download</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;