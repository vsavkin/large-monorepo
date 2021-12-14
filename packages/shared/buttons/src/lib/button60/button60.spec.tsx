import { render } from '@testing-library/react';

import Button60 from './button60';

describe('Button60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button60 />);
    expect(baseElement).toBeTruthy();
  });
});
