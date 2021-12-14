import { render } from '@testing-library/react';

import Button10 from './button10';

describe('Button10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button10 />);
    expect(baseElement).toBeTruthy();
  });
});
