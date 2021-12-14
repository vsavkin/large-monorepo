import { render } from '@testing-library/react';

import Button13 from './button13';

describe('Button13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button13 />);
    expect(baseElement).toBeTruthy();
  });
});
