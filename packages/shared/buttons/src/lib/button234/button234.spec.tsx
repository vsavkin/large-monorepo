import { render } from '@testing-library/react';

import Button234 from './button234';

describe('Button234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button234 />);
    expect(baseElement).toBeTruthy();
  });
});
