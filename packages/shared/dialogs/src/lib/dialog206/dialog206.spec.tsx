import { render } from '@testing-library/react';

import Dialog206 from './dialog206';

describe('Dialog206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog206 />);
    expect(baseElement).toBeTruthy();
  });
});
