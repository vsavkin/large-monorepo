import { render } from '@testing-library/react';

import Alert152 from './alert152';

describe('Alert152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert152 />);
    expect(baseElement).toBeTruthy();
  });
});
