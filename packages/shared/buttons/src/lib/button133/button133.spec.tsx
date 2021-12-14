import { render } from '@testing-library/react';

import Button133 from './button133';

describe('Button133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button133 />);
    expect(baseElement).toBeTruthy();
  });
});
