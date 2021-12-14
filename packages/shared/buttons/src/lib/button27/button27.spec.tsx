import { render } from '@testing-library/react';

import Button27 from './button27';

describe('Button27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button27 />);
    expect(baseElement).toBeTruthy();
  });
});
