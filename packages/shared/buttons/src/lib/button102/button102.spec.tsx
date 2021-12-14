import { render } from '@testing-library/react';

import Button102 from './button102';

describe('Button102', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button102 />);
    expect(baseElement).toBeTruthy();
  });
});
