import { render } from '@testing-library/react';

import Dialog57 from './dialog57';

describe('Dialog57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog57 />);
    expect(baseElement).toBeTruthy();
  });
});
