import { render } from '@testing-library/react';

import Button108 from './button108';

describe('Button108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button108 />);
    expect(baseElement).toBeTruthy();
  });
});
