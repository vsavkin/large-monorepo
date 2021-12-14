import { render } from '@testing-library/react';

import Dialog122 from './dialog122';

describe('Dialog122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog122 />);
    expect(baseElement).toBeTruthy();
  });
});
