import { render } from '@testing-library/react';

import Alert112 from './alert112';

describe('Alert112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert112 />);
    expect(baseElement).toBeTruthy();
  });
});
