import { render } from '@testing-library/react';

import Button77 from './button77';

describe('Button77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button77 />);
    expect(baseElement).toBeTruthy();
  });
});
