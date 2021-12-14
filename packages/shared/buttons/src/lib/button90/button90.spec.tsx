import { render } from '@testing-library/react';

import Button90 from './button90';

describe('Button90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button90 />);
    expect(baseElement).toBeTruthy();
  });
});
