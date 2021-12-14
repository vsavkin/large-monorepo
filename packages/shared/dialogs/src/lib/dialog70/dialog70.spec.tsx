import { render } from '@testing-library/react';

import Dialog70 from './dialog70';

describe('Dialog70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog70 />);
    expect(baseElement).toBeTruthy();
  });
});
