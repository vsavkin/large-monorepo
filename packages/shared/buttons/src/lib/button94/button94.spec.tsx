import { render } from '@testing-library/react';

import Button94 from './button94';

describe('Button94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button94 />);
    expect(baseElement).toBeTruthy();
  });
});
