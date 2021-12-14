import { render } from '@testing-library/react';

import Button24 from './button24';

describe('Button24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button24 />);
    expect(baseElement).toBeTruthy();
  });
});
