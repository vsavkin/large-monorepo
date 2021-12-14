import { render } from '@testing-library/react';

import Button62 from './button62';

describe('Button62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button62 />);
    expect(baseElement).toBeTruthy();
  });
});
