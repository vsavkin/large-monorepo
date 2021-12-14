import { render } from '@testing-library/react';

import Button0 from './button0';

describe('Button0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button0 />);
    expect(baseElement).toBeTruthy();
  });
});
