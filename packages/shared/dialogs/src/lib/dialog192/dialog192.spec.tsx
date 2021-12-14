import { render } from '@testing-library/react';

import Dialog192 from './dialog192';

describe('Dialog192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog192 />);
    expect(baseElement).toBeTruthy();
  });
});
