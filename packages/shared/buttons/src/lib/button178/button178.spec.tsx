import { render } from '@testing-library/react';

import Button178 from './button178';

describe('Button178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button178 />);
    expect(baseElement).toBeTruthy();
  });
});
