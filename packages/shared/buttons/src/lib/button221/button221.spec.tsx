import { render } from '@testing-library/react';

import Button221 from './button221';

describe('Button221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button221 />);
    expect(baseElement).toBeTruthy();
  });
});
