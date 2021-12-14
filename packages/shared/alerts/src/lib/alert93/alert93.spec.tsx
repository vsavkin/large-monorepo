import { render } from '@testing-library/react';

import Alert93 from './alert93';

describe('Alert93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert93 />);
    expect(baseElement).toBeTruthy();
  });
});
