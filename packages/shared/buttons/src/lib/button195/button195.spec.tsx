import { render } from '@testing-library/react';

import Button195 from './button195';

describe('Button195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button195 />);
    expect(baseElement).toBeTruthy();
  });
});
