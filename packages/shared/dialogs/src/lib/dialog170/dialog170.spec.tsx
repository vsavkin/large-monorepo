import { render } from '@testing-library/react';

import Dialog170 from './dialog170';

describe('Dialog170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog170 />);
    expect(baseElement).toBeTruthy();
  });
});
