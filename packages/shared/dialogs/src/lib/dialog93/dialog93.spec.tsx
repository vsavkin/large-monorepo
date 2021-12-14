import { render } from '@testing-library/react';

import Dialog93 from './dialog93';

describe('Dialog93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog93 />);
    expect(baseElement).toBeTruthy();
  });
});
