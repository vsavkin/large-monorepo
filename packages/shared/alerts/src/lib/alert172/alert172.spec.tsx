import { render } from '@testing-library/react';

import Alert172 from './alert172';

describe('Alert172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert172 />);
    expect(baseElement).toBeTruthy();
  });
});
