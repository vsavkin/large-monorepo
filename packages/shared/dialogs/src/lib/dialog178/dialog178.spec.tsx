import { render } from '@testing-library/react';

import Dialog178 from './dialog178';

describe('Dialog178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog178 />);
    expect(baseElement).toBeTruthy();
  });
});
