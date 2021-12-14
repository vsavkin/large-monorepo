import { render } from '@testing-library/react';

import Button73 from './button73';

describe('Button73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button73 />);
    expect(baseElement).toBeTruthy();
  });
});
