import { render } from '@testing-library/react';

import Dialog229 from './dialog229';

describe('Dialog229', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog229 />);
    expect(baseElement).toBeTruthy();
  });
});
