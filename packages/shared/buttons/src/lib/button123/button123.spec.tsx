import { render } from '@testing-library/react';

import Button123 from './button123';

describe('Button123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button123 />);
    expect(baseElement).toBeTruthy();
  });
});
