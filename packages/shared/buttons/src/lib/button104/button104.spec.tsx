import { render } from '@testing-library/react';

import Button104 from './button104';

describe('Button104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button104 />);
    expect(baseElement).toBeTruthy();
  });
});
