import { render } from '@testing-library/react';

import Button200 from './button200';

describe('Button200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button200 />);
    expect(baseElement).toBeTruthy();
  });
});
