import { render } from '@testing-library/react';

import Button220 from './button220';

describe('Button220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button220 />);
    expect(baseElement).toBeTruthy();
  });
});
