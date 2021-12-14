import { render } from '@testing-library/react';

import Button89 from './button89';

describe('Button89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button89 />);
    expect(baseElement).toBeTruthy();
  });
});
