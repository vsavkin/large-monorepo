import { render } from '@testing-library/react';

import Button88 from './button88';

describe('Button88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button88 />);
    expect(baseElement).toBeTruthy();
  });
});
