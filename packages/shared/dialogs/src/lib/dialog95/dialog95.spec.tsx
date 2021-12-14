import { render } from '@testing-library/react';

import Dialog95 from './dialog95';

describe('Dialog95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog95 />);
    expect(baseElement).toBeTruthy();
  });
});
