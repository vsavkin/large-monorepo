import { render } from '@testing-library/react';

import Dialog238 from './dialog238';

describe('Dialog238', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog238 />);
    expect(baseElement).toBeTruthy();
  });
});
