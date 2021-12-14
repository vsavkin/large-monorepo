import { render } from '@testing-library/react';

import Dialog15 from './dialog15';

describe('Dialog15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog15 />);
    expect(baseElement).toBeTruthy();
  });
});
