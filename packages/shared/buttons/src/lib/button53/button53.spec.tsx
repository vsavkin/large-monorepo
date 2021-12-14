import { render } from '@testing-library/react';

import Button53 from './button53';

describe('Button53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button53 />);
    expect(baseElement).toBeTruthy();
  });
});
