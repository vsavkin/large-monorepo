import { render } from '@testing-library/react';

import Button163 from './button163';

describe('Button163', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button163 />);
    expect(baseElement).toBeTruthy();
  });
});
