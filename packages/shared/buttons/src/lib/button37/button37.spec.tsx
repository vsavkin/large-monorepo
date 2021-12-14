import { render } from '@testing-library/react';

import Button37 from './button37';

describe('Button37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button37 />);
    expect(baseElement).toBeTruthy();
  });
});
