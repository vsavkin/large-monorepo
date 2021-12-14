import { render } from '@testing-library/react';

import Button155 from './button155';

describe('Button155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button155 />);
    expect(baseElement).toBeTruthy();
  });
});
