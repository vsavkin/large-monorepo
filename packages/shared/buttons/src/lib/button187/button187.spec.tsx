import { render } from '@testing-library/react';

import Button187 from './button187';

describe('Button187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button187 />);
    expect(baseElement).toBeTruthy();
  });
});
