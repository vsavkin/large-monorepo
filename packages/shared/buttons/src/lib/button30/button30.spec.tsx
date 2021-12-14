import { render } from '@testing-library/react';

import Button30 from './button30';

describe('Button30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button30 />);
    expect(baseElement).toBeTruthy();
  });
});
