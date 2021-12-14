import { render } from '@testing-library/react';

import Button8 from './button8';

describe('Button8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button8 />);
    expect(baseElement).toBeTruthy();
  });
});
