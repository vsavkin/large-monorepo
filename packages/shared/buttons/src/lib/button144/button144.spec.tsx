import { render } from '@testing-library/react';

import Button144 from './button144';

describe('Button144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button144 />);
    expect(baseElement).toBeTruthy();
  });
});
