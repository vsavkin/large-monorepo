import { render } from '@testing-library/react';

import Dialog181 from './dialog181';

describe('Dialog181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog181 />);
    expect(baseElement).toBeTruthy();
  });
});
