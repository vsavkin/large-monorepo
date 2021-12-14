import { render } from '@testing-library/react';

import Button243 from './button243';

describe('Button243', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button243 />);
    expect(baseElement).toBeTruthy();
  });
});
