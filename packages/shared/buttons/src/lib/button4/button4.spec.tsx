import { render } from '@testing-library/react';

import Button4 from './button4';

describe('Button4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button4 />);
    expect(baseElement).toBeTruthy();
  });
});
