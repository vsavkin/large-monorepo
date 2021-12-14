import { render } from '@testing-library/react';

import Button191 from './button191';

describe('Button191', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button191 />);
    expect(baseElement).toBeTruthy();
  });
});
