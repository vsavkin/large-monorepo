import { render } from '@testing-library/react';

import Button26 from './button26';

describe('Button26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button26 />);
    expect(baseElement).toBeTruthy();
  });
});
