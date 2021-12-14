import { render } from '@testing-library/react';

import Dialog107 from './dialog107';

describe('Dialog107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog107 />);
    expect(baseElement).toBeTruthy();
  });
});
