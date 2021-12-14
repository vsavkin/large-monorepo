import { render } from '@testing-library/react';

import Button169 from './button169';

describe('Button169', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button169 />);
    expect(baseElement).toBeTruthy();
  });
});
