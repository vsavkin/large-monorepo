import { render } from '@testing-library/react';

import Dialog115 from './dialog115';

describe('Dialog115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog115 />);
    expect(baseElement).toBeTruthy();
  });
});
