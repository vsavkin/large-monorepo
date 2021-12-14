import { render } from '@testing-library/react';

import Button148 from './button148';

describe('Button148', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button148 />);
    expect(baseElement).toBeTruthy();
  });
});
