import { render } from '@testing-library/react';

import Button70 from './button70';

describe('Button70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button70 />);
    expect(baseElement).toBeTruthy();
  });
});
