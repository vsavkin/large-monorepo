import { render } from '@testing-library/react';

import Button55 from './button55';

describe('Button55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button55 />);
    expect(baseElement).toBeTruthy();
  });
});
