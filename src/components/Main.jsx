import React from 'react';

import Navbar from  './Navbar';
import Footer from './Footer';
import About from '../pages/About';
import Product from '../pages/Product';
import Contacts from '../pages/Contacts';
import Top from './Top';

const Main = () => {
  return (
    <>
      <div className='w-[100%] h-[100%] relative'>
        <Navbar />
        <About />
        <Product />
        <Contacts />
        <Top />
        <Footer />
      </div>
    </>
  );
}

export default Main;