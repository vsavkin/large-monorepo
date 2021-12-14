import { render } from '@testing-library/react';

import Button35 from './button35';

describe('Button35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button35 />);
    expect(baseElement).toBeTruthy();
  });
});
