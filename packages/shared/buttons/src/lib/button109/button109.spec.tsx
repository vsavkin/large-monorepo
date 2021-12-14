import { render } from '@testing-library/react';

import Button109 from './button109';

describe('Button109', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button109 />);
    expect(baseElement).toBeTruthy();
  });
});
