import { render } from '@testing-library/react';

import Alert199 from './alert199';

describe('Alert199', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert199 />);
    expect(baseElement).toBeTruthy();
  });
});
