import { render } from '@testing-library/react';

import Button65 from './button65';

describe('Button65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button65 />);
    expect(baseElement).toBeTruthy();
  });
});
