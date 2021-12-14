import { render } from '@testing-library/react';

import Button130 from './button130';

describe('Button130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button130 />);
    expect(baseElement).toBeTruthy();
  });
});
