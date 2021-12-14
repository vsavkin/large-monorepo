import { render } from '@testing-library/react';

import Button199 from './button199';

describe('Button199', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button199 />);
    expect(baseElement).toBeTruthy();
  });
});
