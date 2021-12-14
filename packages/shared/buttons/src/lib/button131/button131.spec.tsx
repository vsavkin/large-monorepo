import { render } from '@testing-library/react';

import Button131 from './button131';

describe('Button131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button131 />);
    expect(baseElement).toBeTruthy();
  });
});
