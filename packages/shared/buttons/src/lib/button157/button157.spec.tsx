import { render } from '@testing-library/react';

import Button157 from './button157';

describe('Button157', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button157 />);
    expect(baseElement).toBeTruthy();
  });
});
