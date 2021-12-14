import { render } from '@testing-library/react';

import Alert69 from './alert69';

describe('Alert69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert69 />);
    expect(baseElement).toBeTruthy();
  });
});
