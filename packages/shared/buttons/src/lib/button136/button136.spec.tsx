import { render } from '@testing-library/react';

import Button136 from './button136';

describe('Button136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button136 />);
    expect(baseElement).toBeTruthy();
  });
});
