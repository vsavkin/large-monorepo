import { render } from '@testing-library/react';

import Button205 from './button205';

describe('Button205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button205 />);
    expect(baseElement).toBeTruthy();
  });
});
