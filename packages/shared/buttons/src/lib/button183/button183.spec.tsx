import { render } from '@testing-library/react';

import Button183 from './button183';

describe('Button183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button183 />);
    expect(baseElement).toBeTruthy();
  });
});
