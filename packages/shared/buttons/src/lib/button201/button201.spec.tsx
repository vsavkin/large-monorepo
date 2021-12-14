import { render } from '@testing-library/react';

import Button201 from './button201';

describe('Button201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button201 />);
    expect(baseElement).toBeTruthy();
  });
});
