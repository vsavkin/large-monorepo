import { render } from '@testing-library/react';

import Button38 from './button38';

describe('Button38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button38 />);
    expect(baseElement).toBeTruthy();
  });
});
