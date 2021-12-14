import { render } from '@testing-library/react';

import Button95 from './button95';

describe('Button95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button95 />);
    expect(baseElement).toBeTruthy();
  });
});
