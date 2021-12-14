import { render } from '@testing-library/react';

import Dialog81 from './dialog81';

describe('Dialog81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog81 />);
    expect(baseElement).toBeTruthy();
  });
});
