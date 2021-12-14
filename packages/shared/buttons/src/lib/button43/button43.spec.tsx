import { render } from '@testing-library/react';

import Button43 from './button43';

describe('Button43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button43 />);
    expect(baseElement).toBeTruthy();
  });
});
