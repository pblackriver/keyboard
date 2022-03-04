import Key, { TKeyProps } from 'components/Key/Key';
import React, { memo } from 'react';

import { ReactComponent as BackspaceIcon } from '../../assets/icons/backspace_icon.svg';
import { ReactComponent as ContextIcon } from '../../assets/icons/context_menu_icon.svg';
import { ReactComponent as ShiftIcon } from '../../assets/icons/shift_icon.svg';
import { ReactComponent as TabIcon } from '../../assets/icons/tab_icon.svg';
import { ReactComponent as WindowsIcon } from '../../assets/icons/windows_icon.svg';
import { classNames } from './../../utils/index';

export type TKeyFactoryProps = { className?: string } & (
  | { type: 'number' | 'letter' | 'special'; characters: TKeyProps['characters']; keyToListen: TKeyProps['keyToListen'] }
  | { type: 'backspace' }
  | { type: 'tab' }
  | { type: 'capsLock' }
  | { type: 'leftShift' }
  | { type: 'leftCtrl' }
  | { type: 'rightShift' }
  | { type: 'rightCtrl' }
  | { type: 'contextMenu' }
  | { type: 'windows' }
  | { type: 'space' }
);

const KeyFactory: React.FC<TKeyFactoryProps> = memo(props => {
  switch (props.type) {
    case 'number':
      return <Key characters={props.characters} keyToListen={`Digit${props.keyToListen}`} className={props.className ?? ''} />;
    case 'letter':
      return <Key characters={props.characters} keyToListen={`Key${props.keyToListen}`} className={props.className ?? ''} />;
    case 'special':
      return <Key characters={props.characters} keyToListen={props.keyToListen} className={props.className ?? ''} />;
    case 'backspace':
      return (
        <Key
          className={classNames('w-[7.50rem]', props.className ?? '')}
          icon={BackspaceIcon}
          iconClassName='ml-auto w-9'
          keyToListen='Backspace'
          keySound='specialKey'
        />
      );
    case 'tab':
      return (
        <Key
          className={classNames('w-[103px]', props.className ?? '')}
          icon={TabIcon}
          iconClassName='w-9'
          keyToListen='Tab'
          keySound='specialKey'
        />
      );
    case 'capsLock':
      return (
        <Key
          className={classNames('w-[7.188rem] text-sm', props.className ?? '')}
          characters={{ tLeft: 'Caps Lock' }}
          keyToListen='CapsLock'
          keySound='specialKey'
        />
      );
    case 'leftShift':
      return (
        <Key
          className={classNames('w-[4.75rem]', props.className ?? '')}
          icon={ShiftIcon}
          iconClassName='mr-auto w-5 h-5'
          keyToListen='ShiftLeft'
        />
      );
    case 'leftCtrl':
      return (
        <Key
          className={classNames('w-[4.75rem] text-sm', props.className ?? '')}
          characters={{ tLeft: 'Ctrl' }}
          keyToListen='ControlLeft'
        />
      );
    case 'rightShift':
      return (
        <Key
          className={classNames('w-[11.5rem]', props.className ?? '')}
          icon={ShiftIcon}
          iconClassName='ml-auto w-5 h-5'
          keyToListen='ShiftRight'
          keySound='specialKey'
        />
      );
    case 'rightCtrl':
      return (
        <Key
          className={classNames('w-[6.75rem] text-sm', props.className ?? '')}
          characters={{ tRight: 'Ctrl' }}
          keyToListen='ControlRight'
        />
      );
    case 'contextMenu':
      return <Key icon={ContextIcon} keyToListen='ContextMenu' />;
    case 'windows':
      return <Key className={props.className ?? ''} icon={WindowsIcon} iconClassName='m-auto fill-light w-4' keyToListen='MetaLeft' />;
    case 'space':
      return <Key className={classNames('w-[27.75rem]', props.className ?? '')} keyToListen='Space' keySound='spaceKey' />;
    default:
      return <></>;
  }
});

KeyFactory.displayName = 'KeyFactory';
export default KeyFactory;
