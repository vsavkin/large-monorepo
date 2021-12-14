import { render } from '@testing-library/react';

import Button124 from './button124';

describe('Button124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button124 />);
    expect(baseElement).toBeTruthy();
  });
});
