import { render } from '@testing-library/react';

import Alert191 from './alert191';

describe('Alert191', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert191 />);
    expect(baseElement).toBeTruthy();
  });
});
