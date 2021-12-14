import { render } from '@testing-library/react';

import Button208 from './button208';

describe('Button208', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button208 />);
    expect(baseElement).toBeTruthy();
  });
});
