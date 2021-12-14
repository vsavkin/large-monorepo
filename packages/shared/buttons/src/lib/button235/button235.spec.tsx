import { render } from '@testing-library/react';

import Button235 from './button235';

describe('Button235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button235 />);
    expect(baseElement).toBeTruthy();
  });
});
