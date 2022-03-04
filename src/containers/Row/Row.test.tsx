import { render, screen } from '@testing-library/react';

import Row from './Row';

describe('Row', () => {
  it('should render', () => {
    render(<Row />);
    expect(screen.getByLabelText('row')).toBeInTheDocument();
  });
});
