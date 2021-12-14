import { render } from '@testing-library/react';

import Dialog40 from './dialog40';

describe('Dialog40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog40 />);
    expect(baseElement).toBeTruthy();
  });
});
