import { render } from '@testing-library/react';

import Button210 from './button210';

describe('Button210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button210 />);
    expect(baseElement).toBeTruthy();
  });
});
