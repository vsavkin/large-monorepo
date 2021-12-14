import { render } from '@testing-library/react';

import Button149 from './button149';

describe('Button149', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button149 />);
    expect(baseElement).toBeTruthy();
  });
});
