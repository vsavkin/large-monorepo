import { render } from '@testing-library/react';

import Dialog184 from './dialog184';

describe('Dialog184', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog184 />);
    expect(baseElement).toBeTruthy();
  });
});
