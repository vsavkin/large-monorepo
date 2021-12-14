import { render } from '@testing-library/react';

import Button141 from './button141';

describe('Button141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button141 />);
    expect(baseElement).toBeTruthy();
  });
});
