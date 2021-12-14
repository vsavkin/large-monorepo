import { render } from '@testing-library/react';

import Alert63 from './alert63';

describe('Alert63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert63 />);
    expect(baseElement).toBeTruthy();
  });
});
