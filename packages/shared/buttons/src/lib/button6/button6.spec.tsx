import { render } from '@testing-library/react';

import Button6 from './button6';

describe('Button6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button6 />);
    expect(baseElement).toBeTruthy();
  });
});
