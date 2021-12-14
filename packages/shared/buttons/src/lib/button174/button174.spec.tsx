import { render } from '@testing-library/react';

import Button174 from './button174';

describe('Button174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button174 />);
    expect(baseElement).toBeTruthy();
  });
});
