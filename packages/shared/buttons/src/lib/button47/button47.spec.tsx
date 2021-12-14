import { render } from '@testing-library/react';

import Button47 from './button47';

describe('Button47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button47 />);
    expect(baseElement).toBeTruthy();
  });
});
