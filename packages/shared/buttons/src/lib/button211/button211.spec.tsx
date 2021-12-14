import { render } from '@testing-library/react';

import Button211 from './button211';

describe('Button211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button211 />);
    expect(baseElement).toBeTruthy();
  });
});
