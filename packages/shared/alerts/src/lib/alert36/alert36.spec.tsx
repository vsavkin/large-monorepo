import { render } from '@testing-library/react';

import Alert36 from './alert36';

describe('Alert36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert36 />);
    expect(baseElement).toBeTruthy();
  });
});
