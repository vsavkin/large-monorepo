import { render } from '@testing-library/react';

import Alert192 from './alert192';

describe('Alert192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert192 />);
    expect(baseElement).toBeTruthy();
  });
});
