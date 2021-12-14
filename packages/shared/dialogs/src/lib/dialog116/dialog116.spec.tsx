import { render } from '@testing-library/react';

import Dialog116 from './dialog116';

describe('Dialog116', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog116 />);
    expect(baseElement).toBeTruthy();
  });
});
