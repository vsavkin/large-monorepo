import { render } from '@testing-library/react';

import Button182 from './button182';

describe('Button182', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button182 />);
    expect(baseElement).toBeTruthy();
  });
});
