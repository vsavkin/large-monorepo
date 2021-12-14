import { render } from '@testing-library/react';

import Dialog28 from './dialog28';

describe('Dialog28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog28 />);
    expect(baseElement).toBeTruthy();
  });
});
