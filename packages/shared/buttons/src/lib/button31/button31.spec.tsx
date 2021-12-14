import { render } from '@testing-library/react';

import Button31 from './button31';

describe('Button31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button31 />);
    expect(baseElement).toBeTruthy();
  });
});
