import { render, screen } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import EnterKey from './EnterKey';

describe('EnterKey', () => {
  it('should toggle classes on click', () => {
    render(<EnterKey />);
    const key = screen.getAllByLabelText('enter-key');
    Simulate.mouseDown(key[0]);
    expect(key[0]).toHaveClass('shadow-enterLeftKeyDown', { exact: false });
    Simulate.mouseUp(key[0]);
    expect(key[0]).toHaveClass('shadow-enterLeftKeyUp', { exact: false });

    Simulate.mouseDown(key[1]);
    expect(key[1]).toHaveClass('shadow-enterRightKeyDown', { exact: false });
    Simulate.mouseUp(key[1]);
    expect(key[1]).toHaveClass('shadow-enterRightKeyUp', { exact: false });
  });
});
