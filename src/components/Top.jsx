import React from 'react';

import {GrLinkTop} from 'react-icons/gr'

const Top = () => {
  return (
    <>
        <div className='fixed top-[87%] right-[10%] md:right-[10%] w-[50px] h-[50px] bg-[#3A5CE8] rounded-full'>
            <a href='#' className='flex items-center justify-center w-[100%] h-[100%]'>
              <GrLinkTop />
            </a>
        </div>
    </>
  );
}

export default Top;