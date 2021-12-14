import { render } from '@testing-library/react';

import Button198 from './button198';

describe('Button198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button198 />);
    expect(baseElement).toBeTruthy();
  });
});
