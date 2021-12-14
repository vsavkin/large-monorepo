import { render } from '@testing-library/react';

import Button12 from './button12';

describe('Button12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button12 />);
    expect(baseElement).toBeTruthy();
  });
});
