import { render } from '@testing-library/react';

import Button145 from './button145';

describe('Button145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button145 />);
    expect(baseElement).toBeTruthy();
  });
});
