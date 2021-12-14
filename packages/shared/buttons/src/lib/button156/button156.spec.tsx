import { render } from '@testing-library/react';

import Button156 from './button156';

describe('Button156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button156 />);
    expect(baseElement).toBeTruthy();
  });
});
