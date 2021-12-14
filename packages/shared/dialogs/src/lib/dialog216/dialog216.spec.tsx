import { render } from '@testing-library/react';

import Dialog216 from './dialog216';

describe('Dialog216', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog216 />);
    expect(baseElement).toBeTruthy();
  });
});
