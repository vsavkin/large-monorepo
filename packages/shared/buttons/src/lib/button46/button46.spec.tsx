import { render } from '@testing-library/react';

import Button46 from './button46';

describe('Button46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button46 />);
    expect(baseElement).toBeTruthy();
  });
});
