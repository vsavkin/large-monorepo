import { render } from '@testing-library/react';

import Alert240 from './alert240';

describe('Alert240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert240 />);
    expect(baseElement).toBeTruthy();
  });
});
