import { render } from '@testing-library/react';

import Alert9 from './alert9';

describe('Alert9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert9 />);
    expect(baseElement).toBeTruthy();
  });
});
