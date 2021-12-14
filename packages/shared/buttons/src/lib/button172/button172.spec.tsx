import { render } from '@testing-library/react';

import Button172 from './button172';

describe('Button172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button172 />);
    expect(baseElement).toBeTruthy();
  });
});
