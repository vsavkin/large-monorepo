import { render } from '@testing-library/react';

import Dialog129 from './dialog129';

describe('Dialog129', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog129 />);
    expect(baseElement).toBeTruthy();
  });
});
