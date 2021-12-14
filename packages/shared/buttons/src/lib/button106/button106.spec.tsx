import { render } from '@testing-library/react';

import Button106 from './button106';

describe('Button106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button106 />);
    expect(baseElement).toBeTruthy();
  });
});
