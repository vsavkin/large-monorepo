import { render } from '@testing-library/react';

import Dialog9 from './dialog9';

describe('Dialog9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog9 />);
    expect(baseElement).toBeTruthy();
  });
});
