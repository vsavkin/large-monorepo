import { render } from '@testing-library/react';

import Button39 from './button39';

describe('Button39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button39 />);
    expect(baseElement).toBeTruthy();
  });
});
