import { render } from '@testing-library/react';

import Alert83 from './alert83';

describe('Alert83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert83 />);
    expect(baseElement).toBeTruthy();
  });
});
