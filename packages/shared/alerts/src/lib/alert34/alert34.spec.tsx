import { render } from '@testing-library/react';

import Alert34 from './alert34';

describe('Alert34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert34 />);
    expect(baseElement).toBeTruthy();
  });
});
