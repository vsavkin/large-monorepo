import { render } from '@testing-library/react';

import Button113 from './button113';

describe('Button113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button113 />);
    expect(baseElement).toBeTruthy();
  });
});
