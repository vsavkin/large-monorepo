import { render } from '@testing-library/react';

import Dialog0 from './dialog0';

describe('Dialog0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog0 />);
    expect(baseElement).toBeTruthy();
  });
});
