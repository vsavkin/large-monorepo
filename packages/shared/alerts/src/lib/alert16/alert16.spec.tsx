import { render } from '@testing-library/react';

import Alert16 from './alert16';

describe('Alert16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert16 />);
    expect(baseElement).toBeTruthy();
  });
});
