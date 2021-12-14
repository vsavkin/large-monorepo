import { render } from '@testing-library/react';

import Button246 from './button246';

describe('Button246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button246 />);
    expect(baseElement).toBeTruthy();
  });
});
