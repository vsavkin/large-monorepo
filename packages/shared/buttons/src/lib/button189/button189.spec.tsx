import { render } from '@testing-library/react';

import Button189 from './button189';

describe('Button189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button189 />);
    expect(baseElement).toBeTruthy();
  });
});
