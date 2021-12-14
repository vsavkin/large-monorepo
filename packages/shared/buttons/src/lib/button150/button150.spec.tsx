import { render } from '@testing-library/react';

import Button150 from './button150';

describe('Button150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button150 />);
    expect(baseElement).toBeTruthy();
  });
});
