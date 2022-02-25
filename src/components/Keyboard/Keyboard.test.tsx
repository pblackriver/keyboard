import { render, screen } from '@testing-library/react';

import Keyboard from './Keyboard';

describe('Keyboard', () => {
  it('should render', () => {
    render(<Keyboard />);
    const keyboard = screen.getByLabelText('keyboard');
    expect(keyboard).toBeInTheDocument();
  });
});
