import { render } from '@testing-library/react';

import Button61 from './button61';

describe('Button61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button61 />);
    expect(baseElement).toBeTruthy();
  });
});
