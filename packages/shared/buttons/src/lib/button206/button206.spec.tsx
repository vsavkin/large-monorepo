import { render } from '@testing-library/react';

import Button206 from './button206';

describe('Button206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button206 />);
    expect(baseElement).toBeTruthy();
  });
});
