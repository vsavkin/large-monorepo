import { render } from '@testing-library/react';

import Alert128 from './alert128';

describe('Alert128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert128 />);
    expect(baseElement).toBeTruthy();
  });
});
