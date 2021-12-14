import { render } from '@testing-library/react';

import Button194 from './button194';

describe('Button194', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button194 />);
    expect(baseElement).toBeTruthy();
  });
});
