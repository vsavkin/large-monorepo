import { render } from '@testing-library/react';

import Button168 from './button168';

describe('Button168', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button168 />);
    expect(baseElement).toBeTruthy();
  });
});
