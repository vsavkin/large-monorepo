import { render } from '@testing-library/react';

import Dialog2 from './dialog2';

describe('Dialog2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog2 />);
    expect(baseElement).toBeTruthy();
  });
});
