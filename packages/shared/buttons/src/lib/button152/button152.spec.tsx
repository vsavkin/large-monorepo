import { render } from '@testing-library/react';

import Button152 from './button152';

describe('Button152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button152 />);
    expect(baseElement).toBeTruthy();
  });
});
