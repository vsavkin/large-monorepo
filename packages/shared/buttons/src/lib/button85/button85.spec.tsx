import { render } from '@testing-library/react';

import Button85 from './button85';

describe('Button85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button85 />);
    expect(baseElement).toBeTruthy();
  });
});
