import { render } from '@testing-library/react';

import Button229 from './button229';

describe('Button229', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button229 />);
    expect(baseElement).toBeTruthy();
  });
});
