import { render } from '@testing-library/react';

import Alert71 from './alert71';

describe('Alert71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert71 />);
    expect(baseElement).toBeTruthy();
  });
});
