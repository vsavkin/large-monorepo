import { render } from '@testing-library/react';

import Button247 from './button247';

describe('Button247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button247 />);
    expect(baseElement).toBeTruthy();
  });
});
