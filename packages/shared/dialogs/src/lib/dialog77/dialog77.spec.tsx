import { render } from '@testing-library/react';

import Dialog77 from './dialog77';

describe('Dialog77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog77 />);
    expect(baseElement).toBeTruthy();
  });
});
