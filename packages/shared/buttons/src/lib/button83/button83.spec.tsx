import { render } from '@testing-library/react';

import Button83 from './button83';

describe('Button83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button83 />);
    expect(baseElement).toBeTruthy();
  });
});
