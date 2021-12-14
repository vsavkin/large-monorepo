import { render } from '@testing-library/react';

import Button9 from './button9';

describe('Button9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button9 />);
    expect(baseElement).toBeTruthy();
  });
});
