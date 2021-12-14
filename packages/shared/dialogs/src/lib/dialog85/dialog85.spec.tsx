import { render } from '@testing-library/react';

import Dialog85 from './dialog85';

describe('Dialog85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog85 />);
    expect(baseElement).toBeTruthy();
  });
});
