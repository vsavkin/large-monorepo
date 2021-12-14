import { render } from '@testing-library/react';

import Button3 from './button3';

describe('Button3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button3 />);
    expect(baseElement).toBeTruthy();
  });
});
