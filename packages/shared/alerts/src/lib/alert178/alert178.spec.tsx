import { render } from '@testing-library/react';

import Alert178 from './alert178';

describe('Alert178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert178 />);
    expect(baseElement).toBeTruthy();
  });
});
