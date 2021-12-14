import { render } from '@testing-library/react';

import Button134 from './button134';

describe('Button134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button134 />);
    expect(baseElement).toBeTruthy();
  });
});
