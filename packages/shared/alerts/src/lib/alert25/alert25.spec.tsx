import { render } from '@testing-library/react';

import Alert25 from './alert25';

describe('Alert25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert25 />);
    expect(baseElement).toBeTruthy();
  });
});
