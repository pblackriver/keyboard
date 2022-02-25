import React from 'react';

const Keyboard: React.FC = ({ children }) => {
  return (
    <div className='p-3 bg-primary h-keyboard w-keyboard rounded-xl grid gap-y-[0.375rem]' aria-label='keyboard'>
      {children}
    </div>
  );
};

Keyboard.displayName = 'Keyboard';
export default Keyboard;
