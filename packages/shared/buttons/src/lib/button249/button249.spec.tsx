import { render } from '@testing-library/react';

import Button249 from './button249';

describe('Button249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button249 />);
    expect(baseElement).toBeTruthy();
  });
});
