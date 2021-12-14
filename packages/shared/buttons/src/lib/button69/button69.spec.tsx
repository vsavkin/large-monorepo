import { render } from '@testing-library/react';

import Button69 from './button69';

describe('Button69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button69 />);
    expect(baseElement).toBeTruthy();
  });
});
