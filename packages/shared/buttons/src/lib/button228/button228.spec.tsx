import { render } from '@testing-library/react';

import Button228 from './button228';

describe('Button228', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button228 />);
    expect(baseElement).toBeTruthy();
  });
});
