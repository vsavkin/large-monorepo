import { render } from '@testing-library/react';

import Dialog127 from './dialog127';

describe('Dialog127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog127 />);
    expect(baseElement).toBeTruthy();
  });
});
