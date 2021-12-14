import { render } from '@testing-library/react';

import Alert84 from './alert84';

describe('Alert84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert84 />);
    expect(baseElement).toBeTruthy();
  });
});
