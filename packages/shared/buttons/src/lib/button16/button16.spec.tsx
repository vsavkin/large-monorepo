import { render } from '@testing-library/react';

import Button16 from './button16';

describe('Button16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button16 />);
    expect(baseElement).toBeTruthy();
  });
});
