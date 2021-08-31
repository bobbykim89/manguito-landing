import React, { useState } from 'react';
import logo from './logo.png';

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  });

  return (
    <nav
      className={
        'w-full top-0 sticky flex flex-wrap items-center bg-transparent z-50 transition ease-in duration-500 delay-150' +
        (navScroll ? ' bg-pink-300 bg-opacity-70 shadow-md' : ' bg-transparent')
      }
    >
      <div className='container flex flex-wrap items-center py-2 md:py-4 align-middle justify-between'>
        <div className='flex flex-shrink-0 mr-6'>
          <a href='/'>
            <span className='inline-block text-green-600 text-2xl font-bold pl-6'>
              <div className='inline-block w-6 align-middle'>
                <img src={logo} alt='logo' />
              </div>{' '}
              Manguito Page
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
