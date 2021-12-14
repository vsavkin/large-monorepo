import { render } from '@testing-library/react';

import Button82 from './button82';

describe('Button82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button82 />);
    expect(baseElement).toBeTruthy();
  });
});
