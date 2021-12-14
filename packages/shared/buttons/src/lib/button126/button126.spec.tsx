import { render } from '@testing-library/react';

import Button126 from './button126';

describe('Button126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button126 />);
    expect(baseElement).toBeTruthy();
  });
});
