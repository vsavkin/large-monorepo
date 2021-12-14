import { render } from '@testing-library/react';

import Dialog228 from './dialog228';

describe('Dialog228', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog228 />);
    expect(baseElement).toBeTruthy();
  });
});
