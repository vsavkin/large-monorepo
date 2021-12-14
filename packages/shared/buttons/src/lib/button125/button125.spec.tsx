import { render } from '@testing-library/react';

import Button125 from './button125';

describe('Button125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button125 />);
    expect(baseElement).toBeTruthy();
  });
});
