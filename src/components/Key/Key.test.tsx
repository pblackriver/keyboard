import { render, screen } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import { ReactComponent as Icon } from '../../assets/icons/backspace_icon.svg';
import Key from './Key';

describe('Key', () => {
  it('should toggle classes on click', () => {
    render(
      <Key
        characters={{
          tLeft: '!',
          bLeft: '1',
        }}
        keyToListen={'Digit1'}
      />,
    );
    const key = screen.getByLabelText('key');
    Simulate.mouseDown(key);
    expect(key).toHaveClass('shadow-keyDown', { exact: false });
    Simulate.mouseUp(key);
    expect(key).toHaveClass('shadow-keyUp', { exact: false });
  });

  it('should have icon', () => {
    render(<Key icon={Icon} iconClassName='ml-auto w-9' keyToListen='Backspace' keySound='specialKey' />);
    expect(screen.getByLabelText('key-icon')).toBeInTheDocument();
    Simulate.mouseDown(screen.getByLabelText('key'));
  });

  it('should have space key and return space sounds', () => {
    render(<Key keyToListen='Space' keySound='spaceKey' />);
    Simulate.mouseDown(screen.getByLabelText('key'));
  });
});
