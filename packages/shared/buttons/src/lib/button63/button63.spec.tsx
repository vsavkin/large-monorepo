import { render } from '@testing-library/react';

import Button63 from './button63';

describe('Button63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button63 />);
    expect(baseElement).toBeTruthy();
  });
});
