import { render } from '@testing-library/react';

import Button32 from './button32';

describe('Button32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button32 />);
    expect(baseElement).toBeTruthy();
  });
});
