import { render } from '@testing-library/react';

import Button248 from './button248';

describe('Button248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button248 />);
    expect(baseElement).toBeTruthy();
  });
});
