import { render } from '@testing-library/react';

import Alert201 from './alert201';

describe('Alert201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert201 />);
    expect(baseElement).toBeTruthy();
  });
});
