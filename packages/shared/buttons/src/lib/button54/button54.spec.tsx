import { render } from '@testing-library/react';

import Button54 from './button54';

describe('Button54', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button54 />);
    expect(baseElement).toBeTruthy();
  });
});
