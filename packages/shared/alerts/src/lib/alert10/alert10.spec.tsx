import { render } from '@testing-library/react';

import Alert10 from './alert10';

describe('Alert10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert10 />);
    expect(baseElement).toBeTruthy();
  });
});
