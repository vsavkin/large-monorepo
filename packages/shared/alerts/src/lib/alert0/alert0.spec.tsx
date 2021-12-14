import { render } from '@testing-library/react';

import Alert0 from './alert0';

describe('Alert0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert0 />);
    expect(baseElement).toBeTruthy();
  });
});
