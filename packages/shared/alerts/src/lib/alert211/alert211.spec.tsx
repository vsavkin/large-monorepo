import { render } from '@testing-library/react';

import Alert211 from './alert211';

describe('Alert211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert211 />);
    expect(baseElement).toBeTruthy();
  });
});
