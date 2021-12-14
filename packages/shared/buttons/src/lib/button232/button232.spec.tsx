import { render } from '@testing-library/react';

import Button232 from './button232';

describe('Button232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button232 />);
    expect(baseElement).toBeTruthy();
  });
});
