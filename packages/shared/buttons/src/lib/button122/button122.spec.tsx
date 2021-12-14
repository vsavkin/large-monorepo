import { render } from '@testing-library/react';

import Button122 from './button122';

describe('Button122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button122 />);
    expect(baseElement).toBeTruthy();
  });
});
