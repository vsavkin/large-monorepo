import { render } from '@testing-library/react';

import Button21 from './button21';

describe('Button21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button21 />);
    expect(baseElement).toBeTruthy();
  });
});
