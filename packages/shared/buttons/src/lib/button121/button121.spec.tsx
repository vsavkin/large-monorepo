import { render } from '@testing-library/react';

import Button121 from './button121';

describe('Button121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button121 />);
    expect(baseElement).toBeTruthy();
  });
});
