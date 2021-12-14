import { render } from '@testing-library/react';

import Dialog42 from './dialog42';

describe('Dialog42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog42 />);
    expect(baseElement).toBeTruthy();
  });
});
