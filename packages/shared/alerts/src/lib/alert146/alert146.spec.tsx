import { render } from '@testing-library/react';

import Alert146 from './alert146';

describe('Alert146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert146 />);
    expect(baseElement).toBeTruthy();
  });
});
