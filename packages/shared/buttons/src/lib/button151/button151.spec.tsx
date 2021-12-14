import { render } from '@testing-library/react';

import Button151 from './button151';

describe('Button151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button151 />);
    expect(baseElement).toBeTruthy();
  });
});
