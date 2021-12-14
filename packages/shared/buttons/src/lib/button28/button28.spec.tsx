import { render } from '@testing-library/react';

import Button28 from './button28';

describe('Button28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button28 />);
    expect(baseElement).toBeTruthy();
  });
});
