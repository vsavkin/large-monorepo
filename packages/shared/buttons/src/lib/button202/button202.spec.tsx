import { render } from '@testing-library/react';

import Button202 from './button202';

describe('Button202', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button202 />);
    expect(baseElement).toBeTruthy();
  });
});
