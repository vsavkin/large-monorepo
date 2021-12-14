import { render } from '@testing-library/react';

import Alert209 from './alert209';

describe('Alert209', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert209 />);
    expect(baseElement).toBeTruthy();
  });
});
