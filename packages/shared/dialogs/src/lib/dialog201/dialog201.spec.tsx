import { render } from '@testing-library/react';

import Dialog201 from './dialog201';

describe('Dialog201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog201 />);
    expect(baseElement).toBeTruthy();
  });
});
