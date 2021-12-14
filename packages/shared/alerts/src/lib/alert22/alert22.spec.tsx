import { render } from '@testing-library/react';

import Alert22 from './alert22';

describe('Alert22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert22 />);
    expect(baseElement).toBeTruthy();
  });
});
