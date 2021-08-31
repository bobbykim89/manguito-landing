import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import banner from './banner.png';

const Landing = ({ landingHeader, landingP, landingLink }) => {
  return (
    <Fragment>
      <section>
        This is Landing Page
        <div className='grid grid-flow-row lg:grid-cols-5'>
          <div className='col-span-2 order-2 lg:order-2 bg-red-300'>
            <div className='mx-auto my-20 px-4 items-center text-center text-white'>
              <h1 className='text-2xl lg:text-4xl font-bold text-center mb-8 first-letter:text-green-700'>
                {landingHeader}
              </h1>
              <p className='w-5/6 lg:w-2/3 inline-block text-lg lg:text-xl font-semibold mb-4'>
                {landingP}
              </p>
              <a
                href='/gallery'
                className='bg-transparent hover:bg-white text-white font-bold hover:text-red-300 py-2 px-4 border-2 border-white hover:border-transparent rounded inline-block mt-5 transition ease-in duration-150 shadow animate-bounce'
              >
                {landingLink}
              </a>
            </div>
          </div>
          <div className='col-span-3 order1 relative lg:order-2 '>
            <div className='absolute top-0 -left-4 lg:left-[10%] w-60 h-60 lg:w-96 lg:h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-balls'></div>
            <div className='absolute top-0 right-[15%] lg:right-1/4 w-60 h-60 lg:w-96 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-balls animation-delay-2000'></div>
            <div className='absolute left-8 lg:left-1/4 -bottom-4 w-60 h-60 lg:w-96 lg:h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-balls animation-delay-4000'></div>
            <img
              src={banner}
              className='relative w-4/5 lg:w-1/2 mx-auto object-contain'
              alt='manguito banner'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  landingHeader: PropTypes.string.isRequired,
  landingP: PropTypes.string.isRequired,
  landingLink: PropTypes.string.isRequired,
};

Landing.defaultProps = {
  landingHeader: "Welcome to Manguito's home!",
  landingP:
    'Manguito is tiny Peach faced lovebird who likes to chirp and play! Moreover, he is so cute but also very evil :D',
  landingLink: 'Head to Photo Gallery',
};

export default Landing;
