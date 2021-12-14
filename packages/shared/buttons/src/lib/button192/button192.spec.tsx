import { render } from '@testing-library/react';

import Button192 from './button192';

describe('Button192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button192 />);
    expect(baseElement).toBeTruthy();
  });
});
