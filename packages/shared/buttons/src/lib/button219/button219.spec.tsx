import { render } from '@testing-library/react';

import Button219 from './button219';

describe('Button219', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button219 />);
    expect(baseElement).toBeTruthy();
  });
});
