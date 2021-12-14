import { render } from '@testing-library/react';

import Button193 from './button193';

describe('Button193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button193 />);
    expect(baseElement).toBeTruthy();
  });
});
