import { render } from '@testing-library/react';

import Dialog191 from './dialog191';

describe('Dialog191', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog191 />);
    expect(baseElement).toBeTruthy();
  });
});
