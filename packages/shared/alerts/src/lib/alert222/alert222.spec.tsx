import { render } from '@testing-library/react';

import Alert222 from './alert222';

describe('Alert222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert222 />);
    expect(baseElement).toBeTruthy();
  });
});
