import { render } from '@testing-library/react';

import Dialog32 from './dialog32';

describe('Dialog32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog32 />);
    expect(baseElement).toBeTruthy();
  });
});
