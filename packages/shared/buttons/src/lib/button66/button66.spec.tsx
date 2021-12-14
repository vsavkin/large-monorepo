import { render } from '@testing-library/react';

import Button66 from './button66';

describe('Button66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button66 />);
    expect(baseElement).toBeTruthy();
  });
});
