import { render } from '@testing-library/react';

import Dialog110 from './dialog110';

describe('Dialog110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog110 />);
    expect(baseElement).toBeTruthy();
  });
});
