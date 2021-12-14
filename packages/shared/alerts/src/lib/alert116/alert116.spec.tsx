import { render } from '@testing-library/react';

import Alert116 from './alert116';

describe('Alert116', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert116 />);
    expect(baseElement).toBeTruthy();
  });
});
