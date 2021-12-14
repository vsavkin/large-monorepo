import { render } from '@testing-library/react';

import Button74 from './button74';

describe('Button74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button74 />);
    expect(baseElement).toBeTruthy();
  });
});
