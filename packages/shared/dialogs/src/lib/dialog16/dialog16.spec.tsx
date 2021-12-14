import { render } from '@testing-library/react';

import Dialog16 from './dialog16';

describe('Dialog16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog16 />);
    expect(baseElement).toBeTruthy();
  });
});
