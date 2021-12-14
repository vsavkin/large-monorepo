import { render } from '@testing-library/react';

import Button238 from './button238';

describe('Button238', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button238 />);
    expect(baseElement).toBeTruthy();
  });
});
