import { render } from '@testing-library/react';

import Button50 from './button50';

describe('Button50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button50 />);
    expect(baseElement).toBeTruthy();
  });
});
