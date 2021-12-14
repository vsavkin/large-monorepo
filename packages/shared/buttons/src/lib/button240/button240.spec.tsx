import { render } from '@testing-library/react';

import Button240 from './button240';

describe('Button240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button240 />);
    expect(baseElement).toBeTruthy();
  });
});
