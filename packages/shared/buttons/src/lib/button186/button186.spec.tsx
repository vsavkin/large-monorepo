import { render } from '@testing-library/react';

import Button186 from './button186';

describe('Button186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button186 />);
    expect(baseElement).toBeTruthy();
  });
});
