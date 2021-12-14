import { render } from '@testing-library/react';

import Dialog80 from './dialog80';

describe('Dialog80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog80 />);
    expect(baseElement).toBeTruthy();
  });
});
