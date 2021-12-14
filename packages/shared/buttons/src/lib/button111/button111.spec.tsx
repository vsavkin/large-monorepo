import { render } from '@testing-library/react';

import Button111 from './button111';

describe('Button111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button111 />);
    expect(baseElement).toBeTruthy();
  });
});
