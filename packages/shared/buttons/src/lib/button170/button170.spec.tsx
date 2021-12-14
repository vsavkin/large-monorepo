import { render } from '@testing-library/react';

import Button170 from './button170';

describe('Button170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button170 />);
    expect(baseElement).toBeTruthy();
  });
});
