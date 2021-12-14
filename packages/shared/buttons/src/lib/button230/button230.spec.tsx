import { render } from '@testing-library/react';

import Button230 from './button230';

describe('Button230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button230 />);
    expect(baseElement).toBeTruthy();
  });
});
