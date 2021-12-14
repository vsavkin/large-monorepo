import { render } from '@testing-library/react';

import Alert156 from './alert156';

describe('Alert156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert156 />);
    expect(baseElement).toBeTruthy();
  });
});
