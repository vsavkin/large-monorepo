import { render } from '@testing-library/react';

import Dialog172 from './dialog172';

describe('Dialog172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog172 />);
    expect(baseElement).toBeTruthy();
  });
});
