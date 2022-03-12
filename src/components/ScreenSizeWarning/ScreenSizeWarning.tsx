import React from 'react';

const ScreenSizeWarning = () => {
  return (
    <div
      className='flex flex-col items-center justify-center w-64 h-64 p-3 text-center rounded-full bg-primary text-light'
      aria-label='screen-warning'
    >
      <span className='text-6xl'>!</span>
      <p>Your screen is too small to see the magic</p>
    </div>
  );
};

export default ScreenSizeWarning;
