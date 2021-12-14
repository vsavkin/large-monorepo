import { render } from '@testing-library/react';

import Dialog188 from './dialog188';

describe('Dialog188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog188 />);
    expect(baseElement).toBeTruthy();
  });
});
