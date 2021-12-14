import { render } from '@testing-library/react';

import Button188 from './button188';

describe('Button188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button188 />);
    expect(baseElement).toBeTruthy();
  });
});
