import { render } from '@testing-library/react';

import Alert147 from './alert147';

describe('Alert147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert147 />);
    expect(baseElement).toBeTruthy();
  });
});
