import { render } from '@testing-library/react';

import Button197 from './button197';

describe('Button197', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button197 />);
    expect(baseElement).toBeTruthy();
  });
});
