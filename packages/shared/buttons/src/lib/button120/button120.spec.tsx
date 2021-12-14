import { render } from '@testing-library/react';

import Button120 from './button120';

describe('Button120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button120 />);
    expect(baseElement).toBeTruthy();
  });
});
