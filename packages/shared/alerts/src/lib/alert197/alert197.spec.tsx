import { render } from '@testing-library/react';

import Alert197 from './alert197';

describe('Alert197', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert197 />);
    expect(baseElement).toBeTruthy();
  });
});
