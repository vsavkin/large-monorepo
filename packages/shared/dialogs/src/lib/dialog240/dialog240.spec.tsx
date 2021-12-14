import { render } from '@testing-library/react';

import Dialog240 from './dialog240';

describe('Dialog240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog240 />);
    expect(baseElement).toBeTruthy();
  });
});
