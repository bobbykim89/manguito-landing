import React, { Fragment } from 'react';

const Map = () => {
  return (
    <Fragment>
      <div className='rounded-lg overflow-hidden'>
        <iframe
          width='100%'
          height='100%'
          title='map'
          className='absolute inset-0 shadow-xl'
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: 'opacity(0.7)' }}
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.536929831448!2d-111.90054798443322!3d33.30477568081583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b00d3591d5785%3A0xfc7191d169b2d33a!2s3305%20W%20Chandler%20Blvd%2C%20Chandler%2C%20AZ%2085226!5e0!3m2!1sen!2sus!4v1630451417260!5m2!1sen!2sus'
        />
        <div className='bg-green-400 absolute py-6 left-0'>
          <div className='pl-12 pr-8 text-right'>
            <h2 className='font-semibold tracking-wider text-sm text-white'>
              Manguito was found here!
            </h2>
            <p className='mt-2 text-xs'>
              3305 W Chandler Blvd <br />
              Chandler, AZ 85226
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Map;
