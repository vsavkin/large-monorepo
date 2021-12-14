import { render } from '@testing-library/react';

import Button2 from './button2';

describe('Button2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button2 />);
    expect(baseElement).toBeTruthy();
  });
});
