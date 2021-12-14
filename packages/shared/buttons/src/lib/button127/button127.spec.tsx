import { render } from '@testing-library/react';

import Button127 from './button127';

describe('Button127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button127 />);
    expect(baseElement).toBeTruthy();
  });
});
