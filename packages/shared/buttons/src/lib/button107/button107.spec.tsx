import { render } from '@testing-library/react';

import Button107 from './button107';

describe('Button107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button107 />);
    expect(baseElement).toBeTruthy();
  });
});
