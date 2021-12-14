import { render } from '@testing-library/react';

import Button177 from './button177';

describe('Button177', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button177 />);
    expect(baseElement).toBeTruthy();
  });
});
