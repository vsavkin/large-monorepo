import { render } from '@testing-library/react';

import Button81 from './button81';

describe('Button81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button81 />);
    expect(baseElement).toBeTruthy();
  });
});
