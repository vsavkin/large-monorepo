import { render } from '@testing-library/react';

import Button153 from './button153';

describe('Button153', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button153 />);
    expect(baseElement).toBeTruthy();
  });
});
