import { render } from '@testing-library/react';

import Button138 from './button138';

describe('Button138', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button138 />);
    expect(baseElement).toBeTruthy();
  });
});
