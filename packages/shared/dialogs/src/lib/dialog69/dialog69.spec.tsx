import { render } from '@testing-library/react';

import Dialog69 from './dialog69';

describe('Dialog69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog69 />);
    expect(baseElement).toBeTruthy();
  });
});
