import { render } from '@testing-library/react';

import Button162 from './button162';

describe('Button162', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button162 />);
    expect(baseElement).toBeTruthy();
  });
});
