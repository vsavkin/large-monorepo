import { render } from '@testing-library/react';

import Alert94 from './alert94';

describe('Alert94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert94 />);
    expect(baseElement).toBeTruthy();
  });
});
