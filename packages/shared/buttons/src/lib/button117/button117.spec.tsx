import { render } from '@testing-library/react';

import Button117 from './button117';

describe('Button117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button117 />);
    expect(baseElement).toBeTruthy();
  });
});
