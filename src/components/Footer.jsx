import React from 'react';

import {BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='w-[90%] h-[100px] m-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0'>
        <div className='flex justify-between w-[200px]'>
          <BsLinkedin />
          <BsTwitter />
          <FaFacebookF />
          <BsInstagram />
        </div>
        <div className='w-[100%] flex flex-col md:items-end items-center'>
          <p>cillum incididunt</p>
          <p>Nostrud aliquip laboris © 2022 Samael</p>
        </div>
      </div>
    </>
  );
}

export default Footer;