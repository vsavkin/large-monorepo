import { render } from '@testing-library/react';

import Button167 from './button167';

describe('Button167', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button167 />);
    expect(baseElement).toBeTruthy();
  });
});
