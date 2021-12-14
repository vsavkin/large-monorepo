import { render } from '@testing-library/react';

import Button213 from './button213';

describe('Button213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button213 />);
    expect(baseElement).toBeTruthy();
  });
});
