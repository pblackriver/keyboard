import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { ReactComponent as EnterIcon } from '../../assets/icons/enter_icon.svg';
import keySounds from '../../assets/media/key-sounds.mp3';
import { classNames } from './../../utils/index';

const EnterKey: React.FC = () => {
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [play] = useSound(keySounds, {
    interrupt: true,
    sprite: {
      enterDown: [4482, 20],
      enterUp: [5069, 11],
    },
  });

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Enter') {
        play({ id: 'enterDown' });
        setIsKeyDown(true);
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', e => {
      if (e.code === 'Enter') {
        play({ id: 'enterUp' });
        setIsKeyDown(false);
        e.preventDefault();
      }
    });
  });

  return (
    <div className='flex'>
      <div
        role={'button'}
        tabIndex={0}
        aria-label='enter-key'
        className={classNames(
          'w-3 h-16 bg-primary rounded-l-lg cursor-pointer',
          isKeyDown ? 'shadow-enterLeftKeyDown' : 'shadow-enterLeftKeyUp',
        )}
        onMouseDown={() => setIsKeyDown(true)}
        onMouseUp={() => setIsKeyDown(false)}
      ></div>
      <div
        role={'button'}
        tabIndex={0}
        aria-label='enter-key'
        className={classNames(
          'w-[4.313rem] h-[8.75rem] bg-primary rounded-r-lg rounded-bl-lg cursor-pointer px-3 py-2',
          isKeyDown ? 'shadow-enterRightKeyDown' : 'shadow-enterRightKeyUp',
        )}
        onMouseDown={() => setIsKeyDown(true)}
        onMouseUp={() => setIsKeyDown(false)}
      >
        <EnterIcon className='ml-auto w-9' />
      </div>
    </div>
  );
};

EnterKey.displayName = 'EnterKey';
export default EnterKey;
