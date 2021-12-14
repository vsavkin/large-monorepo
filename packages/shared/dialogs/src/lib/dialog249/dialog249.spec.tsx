import { render } from '@testing-library/react';

import Dialog249 from './dialog249';

describe('Dialog249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog249 />);
    expect(baseElement).toBeTruthy();
  });
});
