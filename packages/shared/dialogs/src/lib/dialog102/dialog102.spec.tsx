import { render } from '@testing-library/react';

import Dialog102 from './dialog102';

describe('Dialog102', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog102 />);
    expect(baseElement).toBeTruthy();
  });
});
