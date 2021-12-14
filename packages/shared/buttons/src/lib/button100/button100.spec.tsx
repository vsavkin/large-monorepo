import { render } from '@testing-library/react';

import Button100 from './button100';

describe('Button100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button100 />);
    expect(baseElement).toBeTruthy();
  });
});
