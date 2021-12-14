import { render } from '@testing-library/react';

import Button212 from './button212';

describe('Button212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button212 />);
    expect(baseElement).toBeTruthy();
  });
});
