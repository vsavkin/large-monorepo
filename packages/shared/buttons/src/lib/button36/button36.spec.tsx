import { render } from '@testing-library/react';

import Button36 from './button36';

describe('Button36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button36 />);
    expect(baseElement).toBeTruthy();
  });
});
