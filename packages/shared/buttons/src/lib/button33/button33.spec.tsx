import { render } from '@testing-library/react';

import Button33 from './button33';

describe('Button33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button33 />);
    expect(baseElement).toBeTruthy();
  });
});
