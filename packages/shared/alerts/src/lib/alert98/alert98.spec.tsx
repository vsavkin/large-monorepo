import { render } from '@testing-library/react';

import Alert98 from './alert98';

describe('Alert98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert98 />);
    expect(baseElement).toBeTruthy();
  });
});
