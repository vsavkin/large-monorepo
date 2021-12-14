import { render } from '@testing-library/react';

import Button86 from './button86';

describe('Button86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button86 />);
    expect(baseElement).toBeTruthy();
  });
});
