import { render } from '@testing-library/react';

import Dialog30 from './dialog30';

describe('Dialog30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog30 />);
    expect(baseElement).toBeTruthy();
  });
});
