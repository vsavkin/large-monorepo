import { render } from '@testing-library/react';

import Dialog8 from './dialog8';

describe('Dialog8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog8 />);
    expect(baseElement).toBeTruthy();
  });
});
