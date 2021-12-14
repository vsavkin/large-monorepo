import { render } from '@testing-library/react';

import Button34 from './button34';

describe('Button34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button34 />);
    expect(baseElement).toBeTruthy();
  });
});
