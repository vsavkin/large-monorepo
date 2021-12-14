import { render } from '@testing-library/react';

import Button196 from './button196';

describe('Button196', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button196 />);
    expect(baseElement).toBeTruthy();
  });
});
