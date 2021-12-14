import { render } from '@testing-library/react';

import Button51 from './button51';

describe('Button51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button51 />);
    expect(baseElement).toBeTruthy();
  });
});
