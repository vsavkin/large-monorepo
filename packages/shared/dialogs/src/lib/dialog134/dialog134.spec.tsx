import { render } from '@testing-library/react';

import Dialog134 from './dialog134';

describe('Dialog134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog134 />);
    expect(baseElement).toBeTruthy();
  });
});
