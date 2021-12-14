import { render } from '@testing-library/react';

import Alert87 from './alert87';

describe('Alert87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert87 />);
    expect(baseElement).toBeTruthy();
  });
});
