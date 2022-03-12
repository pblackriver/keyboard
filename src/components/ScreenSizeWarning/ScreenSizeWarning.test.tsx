import { render, screen } from '@testing-library/react';

import ScreenSizeWarning from './ScreenSizeWarning';

describe('ScreenSizeWarning', () => {
  it('should render', () => {
    render(<ScreenSizeWarning />);
    expect(screen.getByText('Your screen is too small to see the magic')).toBeInTheDocument();
  });
});
