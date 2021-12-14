import { render } from '@testing-library/react';

import Dialog243 from './dialog243';

describe('Dialog243', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog243 />);
    expect(baseElement).toBeTruthy();
  });
});
