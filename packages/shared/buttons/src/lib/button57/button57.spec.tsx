import { render } from '@testing-library/react';

import Button57 from './button57';

describe('Button57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button57 />);
    expect(baseElement).toBeTruthy();
  });
});
