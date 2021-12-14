import { render } from '@testing-library/react';

import Button92 from './button92';

describe('Button92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button92 />);
    expect(baseElement).toBeTruthy();
  });
});
