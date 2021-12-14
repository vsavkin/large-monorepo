import { render } from '@testing-library/react';

import Alert247 from './alert247';

describe('Alert247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert247 />);
    expect(baseElement).toBeTruthy();
  });
});
