import { render } from '@testing-library/react';

import Alert57 from './alert57';

describe('Alert57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert57 />);
    expect(baseElement).toBeTruthy();
  });
});
