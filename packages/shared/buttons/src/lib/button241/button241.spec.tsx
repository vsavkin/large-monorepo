import { render } from '@testing-library/react';

import Button241 from './button241';

describe('Button241', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button241 />);
    expect(baseElement).toBeTruthy();
  });
});
