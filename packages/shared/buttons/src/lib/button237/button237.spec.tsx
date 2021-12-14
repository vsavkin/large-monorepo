import { render } from '@testing-library/react';

import Button237 from './button237';

describe('Button237', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button237 />);
    expect(baseElement).toBeTruthy();
  });
});
