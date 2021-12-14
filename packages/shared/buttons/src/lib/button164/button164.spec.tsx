import { render } from '@testing-library/react';

import Button164 from './button164';

describe('Button164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button164 />);
    expect(baseElement).toBeTruthy();
  });
});
