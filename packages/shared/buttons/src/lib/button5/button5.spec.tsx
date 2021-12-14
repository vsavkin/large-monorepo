import { render } from '@testing-library/react';

import Button5 from './button5';

describe('Button5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button5 />);
    expect(baseElement).toBeTruthy();
  });
});
