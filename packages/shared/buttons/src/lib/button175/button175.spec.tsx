import { render } from '@testing-library/react';

import Button175 from './button175';

describe('Button175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button175 />);
    expect(baseElement).toBeTruthy();
  });
});
