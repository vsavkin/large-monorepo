import { render } from '@testing-library/react';

import Alert59 from './alert59';

describe('Alert59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert59 />);
    expect(baseElement).toBeTruthy();
  });
});
