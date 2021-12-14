import { render } from '@testing-library/react';

import Button17 from './button17';

describe('Button17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button17 />);
    expect(baseElement).toBeTruthy();
  });
});
