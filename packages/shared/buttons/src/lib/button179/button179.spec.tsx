import { render } from '@testing-library/react';

import Button179 from './button179';

describe('Button179', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button179 />);
    expect(baseElement).toBeTruthy();
  });
});
