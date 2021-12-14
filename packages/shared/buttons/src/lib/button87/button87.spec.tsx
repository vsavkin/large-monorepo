import { render } from '@testing-library/react';

import Button87 from './button87';

describe('Button87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button87 />);
    expect(baseElement).toBeTruthy();
  });
});
