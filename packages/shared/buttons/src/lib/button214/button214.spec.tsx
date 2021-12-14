import { render } from '@testing-library/react';

import Button214 from './button214';

describe('Button214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button214 />);
    expect(baseElement).toBeTruthy();
  });
});
