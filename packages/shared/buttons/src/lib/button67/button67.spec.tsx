import { render } from '@testing-library/react';

import Button67 from './button67';

describe('Button67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button67 />);
    expect(baseElement).toBeTruthy();
  });
});
