import { render } from '@testing-library/react';

import Button128 from './button128';

describe('Button128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button128 />);
    expect(baseElement).toBeTruthy();
  });
});
