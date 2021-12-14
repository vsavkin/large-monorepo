import { render } from '@testing-library/react';

import Alert213 from './alert213';

describe('Alert213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert213 />);
    expect(baseElement).toBeTruthy();
  });
});
