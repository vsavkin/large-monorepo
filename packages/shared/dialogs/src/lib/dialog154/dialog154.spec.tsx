import { render } from '@testing-library/react';

import Dialog154 from './dialog154';

describe('Dialog154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog154 />);
    expect(baseElement).toBeTruthy();
  });
});
