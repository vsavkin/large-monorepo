import { render } from '@testing-library/react';

import Dialog25 from './dialog25';

describe('Dialog25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog25 />);
    expect(baseElement).toBeTruthy();
  });
});
