import { render } from '@testing-library/react';

import Dialog146 from './dialog146';

describe('Dialog146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog146 />);
    expect(baseElement).toBeTruthy();
  });
});
