import { render } from '@testing-library/react';

import Button44 from './button44';

describe('Button44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button44 />);
    expect(baseElement).toBeTruthy();
  });
});
