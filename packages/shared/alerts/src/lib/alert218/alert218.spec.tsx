import { render } from '@testing-library/react';

import Alert218 from './alert218';

describe('Alert218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert218 />);
    expect(baseElement).toBeTruthy();
  });
});
