import { render } from '@testing-library/react';

import Button135 from './button135';

describe('Button135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button135 />);
    expect(baseElement).toBeTruthy();
  });
});
