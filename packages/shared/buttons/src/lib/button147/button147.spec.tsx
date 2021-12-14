import { render } from '@testing-library/react';

import Button147 from './button147';

describe('Button147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button147 />);
    expect(baseElement).toBeTruthy();
  });
});
