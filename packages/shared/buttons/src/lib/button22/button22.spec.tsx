import { render } from '@testing-library/react';

import Button22 from './button22';

describe('Button22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button22 />);
    expect(baseElement).toBeTruthy();
  });
});
