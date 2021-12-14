import { render } from '@testing-library/react';

import Button52 from './button52';

describe('Button52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button52 />);
    expect(baseElement).toBeTruthy();
  });
});
