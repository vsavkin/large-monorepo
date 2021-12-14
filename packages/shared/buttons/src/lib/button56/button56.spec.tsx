import { render } from '@testing-library/react';

import Button56 from './button56';

describe('Button56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button56 />);
    expect(baseElement).toBeTruthy();
  });
});
