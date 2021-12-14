import { render } from '@testing-library/react';

import Button222 from './button222';

describe('Button222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button222 />);
    expect(baseElement).toBeTruthy();
  });
});
