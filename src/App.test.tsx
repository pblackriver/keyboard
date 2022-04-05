import { render, screen, waitFor } from '@testing-library/react';
import App from 'App';
import * as React from 'react';

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('App', () => {
  it('should render App with screen warning', async () => {
    render(
      <React.Suspense fallback={'loading'}>
        <App />
      </React.Suspense>,
    );
    expect(screen.getByLabelText('screen-warning')).toBeInTheDocument();
    await waitFor(() => resizeWindow(1920, 1080));
    const rows = await screen.findAllByLabelText(/row/i);
    expect(rows).toHaveLength(4);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });
});
