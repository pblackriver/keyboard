import { renderHook } from '@testing-library/react-hooks';

import useWindowSize from './useWindowSize';

describe('useWindowSize tests', () => {
  it('should return the correct sizes', () => {
    const { result } = renderHook(() => useWindowSize());
    expect({
      width: 1024,
      height: 768,
    }).toEqual(result.current);
  });
});
