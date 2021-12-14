import { render } from '@testing-library/react';

import Dialog193 from './dialog193';

describe('Dialog193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog193 />);
    expect(baseElement).toBeTruthy();
  });
});
