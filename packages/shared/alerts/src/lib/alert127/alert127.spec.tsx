import { render } from '@testing-library/react';

import Alert127 from './alert127';

describe('Alert127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert127 />);
    expect(baseElement).toBeTruthy();
  });
});
