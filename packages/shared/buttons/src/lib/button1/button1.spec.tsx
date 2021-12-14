import { render } from '@testing-library/react';

import Button1 from './button1';

describe('Button1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button1 />);
    expect(baseElement).toBeTruthy();
  });
});
