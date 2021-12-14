import { render } from '@testing-library/react';

import Button103 from './button103';

describe('Button103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button103 />);
    expect(baseElement).toBeTruthy();
  });
});
