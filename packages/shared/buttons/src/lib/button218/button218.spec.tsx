import { render } from '@testing-library/react';

import Button218 from './button218';

describe('Button218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button218 />);
    expect(baseElement).toBeTruthy();
  });
});
