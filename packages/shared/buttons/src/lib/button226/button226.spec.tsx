import { render } from '@testing-library/react';

import Button226 from './button226';

describe('Button226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button226 />);
    expect(baseElement).toBeTruthy();
  });
});
