import { render } from '@testing-library/react';

import Dialog156 from './dialog156';

describe('Dialog156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog156 />);
    expect(baseElement).toBeTruthy();
  });
});
