import { render } from '@testing-library/react';

import Button25 from './button25';

describe('Button25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button25 />);
    expect(baseElement).toBeTruthy();
  });
});
