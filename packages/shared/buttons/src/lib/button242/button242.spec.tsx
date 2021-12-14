import { render } from '@testing-library/react';

import Button242 from './button242';

describe('Button242', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button242 />);
    expect(baseElement).toBeTruthy();
  });
});
