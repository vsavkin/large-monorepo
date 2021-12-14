import { render } from '@testing-library/react';

import Button29 from './button29';

describe('Button29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button29 />);
    expect(baseElement).toBeTruthy();
  });
});
