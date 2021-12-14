import { render } from '@testing-library/react';

import Button115 from './button115';

describe('Button115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button115 />);
    expect(baseElement).toBeTruthy();
  });
});
