import { render } from '@testing-library/react';

import Button98 from './button98';

describe('Button98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button98 />);
    expect(baseElement).toBeTruthy();
  });
});
