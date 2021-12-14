import { render } from '@testing-library/react';

import Button64 from './button64';

describe('Button64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button64 />);
    expect(baseElement).toBeTruthy();
  });
});
