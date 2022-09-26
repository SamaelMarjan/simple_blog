import React from 'react';

const Product = () => {
  return (
    <>
      <div id='product'>
        <div className='w-[90%] h-[100%] md:h-[257px] m-auto flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='md:w-[400px] h-[150px] md:h-[150px] flex flex-col justify-center items-center'> 
            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt</p>
          </div>
          <div className='w-[100%] md:w-[50%] h-[150px] md:h-[100%] flex flex-row justify-center items-center'>
            <div className='w-[50%] h-[]'>
              <p>Graphic Design</p>
              <p>UX Design</p>
              <p>Prototyping</p>
              <p>Webflow</p>
            </div>
            <div>
              <p>Branding</p>
              <p>Coding</p>
              <p>Back-End</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-[90%] h-[100%] md:h-[200px] m-auto items-center justify-center md:justify-between md:gap-2'>
          <div className='w-[100%] md:w-[270px] h-[160px] flex items-center justify-center'>
            <div>
              <p>Where teams design together</p>
              <p>Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit</p>
            </div>
          </div>
          <div className='w-[100%] flex flex-col md:flex-row md:justify-end gap-10'>
            <div className='bg-[#F5F5FF] w-[100%] md:w-[200px] h-[200px] flex items-center justify-center'>
              <p className='text-black'>Image</p>
            </div>
            <div className='bg-[#F5F5FF] w-[100%] md:w-[200px] h-[200px] flex items-center justify-center'>
              <p className='text-black'>Image</p>
            </div>
            <div className='bg-[#F5F5FF] w-[100%] md:w-[200px] h-[200px] flex items-center justify-center'>
              <p className='text-black'>Image</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;