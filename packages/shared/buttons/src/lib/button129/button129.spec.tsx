import { render } from '@testing-library/react';

import Button129 from './button129';

describe('Button129', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button129 />);
    expect(baseElement).toBeTruthy();
  });
});
