import { render } from '@testing-library/react';

import Alert186 from './alert186';

describe('Alert186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert186 />);
    expect(baseElement).toBeTruthy();
  });
});
