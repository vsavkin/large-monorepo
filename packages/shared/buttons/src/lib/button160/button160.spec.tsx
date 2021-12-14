import { render } from '@testing-library/react';

import Button160 from './button160';

describe('Button160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button160 />);
    expect(baseElement).toBeTruthy();
  });
});
