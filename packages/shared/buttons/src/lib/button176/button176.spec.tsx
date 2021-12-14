import { render } from '@testing-library/react';

import Button176 from './button176';

describe('Button176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button176 />);
    expect(baseElement).toBeTruthy();
  });
});
