import { render } from '@testing-library/react';

import Alert33 from './alert33';

describe('Alert33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert33 />);
    expect(baseElement).toBeTruthy();
  });
});
