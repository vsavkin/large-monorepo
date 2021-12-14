import { render } from '@testing-library/react';

import Button78 from './button78';

describe('Button78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button78 />);
    expect(baseElement).toBeTruthy();
  });
});
