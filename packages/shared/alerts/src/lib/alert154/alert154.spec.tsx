import { render } from '@testing-library/react';

import Alert154 from './alert154';

describe('Alert154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert154 />);
    expect(baseElement).toBeTruthy();
  });
});
