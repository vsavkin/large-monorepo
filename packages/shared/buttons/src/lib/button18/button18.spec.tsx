import { render } from '@testing-library/react';

import Button18 from './button18';

describe('Button18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button18 />);
    expect(baseElement).toBeTruthy();
  });
});
