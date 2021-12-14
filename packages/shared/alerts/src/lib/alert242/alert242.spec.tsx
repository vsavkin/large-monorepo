import { render } from '@testing-library/react';

import Alert242 from './alert242';

describe('Alert242', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert242 />);
    expect(baseElement).toBeTruthy();
  });
});
