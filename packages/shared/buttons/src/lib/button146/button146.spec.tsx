import { render } from '@testing-library/react';

import Button146 from './button146';

describe('Button146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button146 />);
    expect(baseElement).toBeTruthy();
  });
});
