import { render } from '@testing-library/react';

import Dialog222 from './dialog222';

describe('Dialog222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog222 />);
    expect(baseElement).toBeTruthy();
  });
});
