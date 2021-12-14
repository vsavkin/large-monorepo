import { render } from '@testing-library/react';

import Button93 from './button93';

describe('Button93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button93 />);
    expect(baseElement).toBeTruthy();
  });
});
