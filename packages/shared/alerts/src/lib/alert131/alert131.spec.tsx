import { render } from '@testing-library/react';

import Alert131 from './alert131';

describe('Alert131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert131 />);
    expect(baseElement).toBeTruthy();
  });
});
