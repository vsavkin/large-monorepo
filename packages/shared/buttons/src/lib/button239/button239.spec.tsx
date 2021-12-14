import { render } from '@testing-library/react';

import Button239 from './button239';

describe('Button239', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button239 />);
    expect(baseElement).toBeTruthy();
  });
});
