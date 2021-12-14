import { render } from '@testing-library/react';

import Dialog223 from './dialog223';

describe('Dialog223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog223 />);
    expect(baseElement).toBeTruthy();
  });
});
