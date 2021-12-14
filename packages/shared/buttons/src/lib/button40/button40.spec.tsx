import { render } from '@testing-library/react';

import Button40 from './button40';

describe('Button40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button40 />);
    expect(baseElement).toBeTruthy();
  });
});
