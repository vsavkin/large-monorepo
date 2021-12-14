import { render } from '@testing-library/react';

import Button227 from './button227';

describe('Button227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button227 />);
    expect(baseElement).toBeTruthy();
  });
});
