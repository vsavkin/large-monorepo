import { render } from '@testing-library/react';

import Button233 from './button233';

describe('Button233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button233 />);
    expect(baseElement).toBeTruthy();
  });
});
