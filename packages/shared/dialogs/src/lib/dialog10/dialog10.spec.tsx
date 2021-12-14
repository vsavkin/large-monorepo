import { render } from '@testing-library/react';

import Dialog10 from './dialog10';

describe('Dialog10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog10 />);
    expect(baseElement).toBeTruthy();
  });
});
