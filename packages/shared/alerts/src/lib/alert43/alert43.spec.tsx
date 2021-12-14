import { render } from '@testing-library/react';

import Alert43 from './alert43';

describe('Alert43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert43 />);
    expect(baseElement).toBeTruthy();
  });
});
