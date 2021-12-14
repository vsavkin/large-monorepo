import { render } from '@testing-library/react';

import Button231 from './button231';

describe('Button231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button231 />);
    expect(baseElement).toBeTruthy();
  });
});
