import React, { memo, useEffect, useState } from 'react';
import useSound from 'use-sound';

import keySounds from '../../assets/media/key-sounds.mp3';
import { classNames } from './../../utils/index';

export type TKeyProps = {
  className?: string;
  keyToListen: string;
  keySound?: 'normalKey' | 'spaceKey' | 'specialKey';
} & (
  | { characters?: TCharacters; icon?: never }
  | {
      characters?: never;
      icon?: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
      iconClassName?: string;
    }
);

type TCharacters = {
  tLeft?: string;
  bLeft?: string;
  tRight?: string;
  bRight?: string;
};

const Key: React.FC<TKeyProps> = memo(({ className, keySound = 'normalKey', ...props }) => {
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [play] = useSound(keySounds, {
    interrupt: true,
    sprite: {
      spaceDown: [360, 30],
      spaceUp: [1008, 20],
      keyDown: [2390, 30],
      keyUp: [2935, 40],
      specialDown: [4482, 20],
      specialUp: [5069, 11],
    },
  });

  const mapSounds = () => {
    switch (keySound) {
      case 'spaceKey':
        return ['spaceDown', 'spaceUp'];
      case 'specialKey':
        return ['specialDown', 'specialUp'];
      default:
        return ['keyDown', 'keyUp'];
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === props.keyToListen) {
        setIsKeyDown(true);
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', e => {
      if (e.code === props.keyToListen) {
        setIsKeyDown(false);
        e.preventDefault();
      }
    });
  });

  useEffect(() => {
    isKeyDown ? play({ id: mapSounds()[0] }) : play({ id: mapSounds()[1] });
  }, [isKeyDown]);

  return (
    <button
      className={classNames(
        'flex flex-col w-16 h-16 px-3 py-2 rounded-lg cursor-pointer bg-primary text-light mr-3',
        isKeyDown ? 'shadow-keyDown' : 'shadow-keyUp',
        className ?? '',
      )}
      aria-label='key'
      onMouseDown={() => setIsKeyDown(true)}
      onMouseUp={() => setIsKeyDown(false)}
    >
      {props.characters && (
        <>
          <div className='flex justify-between w-full'>
            <span>{props.characters.tLeft}</span>
            <span>{props.characters.tRight}</span>
          </div>
          <div className='flex justify-between w-full'>
            <span>{props.characters.bLeft}</span>
            <span>{props.characters.bRight}</span>
          </div>
        </>
      )}
      {props.icon && <props.icon aria-label='key-icon' className={props.iconClassName} />}
    </button>
  );
});

Key.displayName = 'Key';
export default Key;
