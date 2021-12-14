import { render } from '@testing-library/react';

import Button216 from './button216';

describe('Button216', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button216 />);
    expect(baseElement).toBeTruthy();
  });
});
